import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { editScheduledReducer } from "./EditScheduledComponent";
import { activestepReducer } from "./ActiveStep";
import { redirectUserReducer } from "./RedirectUser";
const rootReducer = combineReducers({
  user: userReducer,
  edit: editScheduledReducer,
  daystep: activestepReducer,
  days_page: redirectUserReducer,
});

export default rootReducer;
