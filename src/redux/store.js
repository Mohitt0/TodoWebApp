import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import taskReducer from "./task";
import status from "./status";
const reducers= combineReducers({
  tasks: taskReducer,
  status: status,
})
const persistConfig = {
    key: "root",
    storage,
  };
const persistedReducer = persistReducer(persistConfig, reducers);
const store = configureStore({
    reducer:persistedReducer,
    middleware: [thunk],
})
let persistor = persistStore(store);

export { store, persistor };