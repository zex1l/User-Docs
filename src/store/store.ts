import { configureStore,  } from "@reduxjs/toolkit";
import userDocsSlice from "./slices/userDocsSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import authSlice from "./slices/authSlice";
import modalSlice from "./slices/modalSlice";


export const store = configureStore({
    reducer: {
        userDocs: userDocsSlice,
        auth: authSlice,
        modal: modalSlice
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
