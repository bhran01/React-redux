import { legacy_createStore } from "redux";
import {rootReducer} from "./reducer/reducer";

export const storeObject = legacy_createStore(rootReducer,{value:99})