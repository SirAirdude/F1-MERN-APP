import { createStore } from "redux";
import driverReducer from "./reducers/drivers.js";

export default createStore(driverReducer);
