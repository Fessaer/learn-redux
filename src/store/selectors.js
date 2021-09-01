import { createSelector } from "@reduxjs/toolkit";
import { statusFilters } from "./statusFilter/reducer";
import { categoryFilters } from "./categoryFilter/reducer";

const selectTasks = (state) => state.entities.tasks;
const filters = (state) => state.filters;

export const selectVisibleTasks = createSelector(
  [selectTasks, filters],
  (tasks, filter) => {
    switch (filter.byStatus) {
      case statusFilters.SHOW_ALL:
        // Выбираем что вернуть, если по статусу выбраны "Все" и выбрана определенная категория
        return filter.byCategory !== categoryFilters.SHOW_ALL
          ? tasks.filter((task) => task.category === filter.byCategory)
          : tasks;

      case statusFilters.SHOW_ACTIVE:
        // Выбираем что вернуть, если по статусу выбраны "Активные" и выбрана определенная категория
        return tasks.filter((task) => {
          return filter.byCategory !== categoryFilters.SHOW_ALL
            ? task.category === filter.byCategory && !task.completed
            : !task.completed;
        });

      case statusFilters.SHOW_COMPLETED:
        // Выбираем что вернуть, если по статусу выбраны "Выполненные" и выбрана определенная категория
        return tasks.filter((task) => {
          return filter.byCategory !== categoryFilters.SHOW_ALL
            ? task.category === filter.byCategory && task.completed
            : task.completed;
        });

      default:
        throw new Error("Неизвестный фильтр: " + filter);
    }
  }
);
