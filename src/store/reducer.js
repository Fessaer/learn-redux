import * as actions from "./actionTypes";

let lastId = 0;

export default function reducer(state = { tasks: [], num: 0 }, action) {
  switch (action.type) {
    case actions.TASK_ADD:
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            id: ++lastId,
            title: action.payload.title,
            completed: false,
          },
        ],
      };

    case actions.TASK_TOGGLE:
      const { tasks } = state;
      const updateTasks = tasks.map((task) => {
        if (task.id === action.payload.id)
          return { ...task, completed: !task.completed };
        return task;
      });
      return { ...state, tasks: updateTasks };

    case actions.TASK_REMOVE:
      const removedTasks = state.tasks.filter(
        (task) => action.payload.id !== task.id
      );
      return { ...state, task: removedTasks };

    case actions.INCREMENT:
      const num = state.num + 1;
      return { ...state, num: num };

    case actions.DECREMENT:
      if (state.num > 0) {
        const decrement = state.num - 1;
        return { ...state, num: decrement };
      } else {
        return { ...state, num: 0 };
      }

    default:
      return state;
  }
}
