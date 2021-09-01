import { combineReducers } from "redux";
import entitiesReducer from "./entities";
import filtersReducer from "./filtersReducer";
import customs from "./customs";

export default combineReducers({
  entities: entitiesReducer,
  filters: filtersReducer,
  customs: customs,
});
