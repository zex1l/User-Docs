import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState = {
    isOpen: false,
    message: ''
}

const modalSlice = createSlice({
    initialState,
    name: 'modalSlice',
    reducers: {
        openModal: (state, action:PayloadAction<string>) => {
            state.isOpen = true
            state.message = action.payload
        },
        closeModal: (state) => {
            state.isOpen = false
            state.message = ''
        }
    }
})

export const  {
    closeModal,
    openModal
} = modalSlice.actions

export const getIsModalProp = (state: RootState) => state.modal

export default modalSlice.reducer