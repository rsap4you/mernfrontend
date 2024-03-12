import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import { combineReducers } from "@reduxjs/toolkit";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["user"],
};
const reducer = combineReducers({
    user: userSlice,
})
const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
    // reducer: {
    //     user: userSlice,
    // },

    reducer: persistedReducer
})

export default store;