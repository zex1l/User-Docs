import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IStateUserDocs, IUserDocs } from "../../types/IUserDocs";
import { RootState } from "../store";

const initialState : IStateUserDocs = {
    docs: []
}

const userDocsSlice = createSlice({
    initialState,
    name: 'userDOcs',
    reducers: {
        setUserDocs: (state, action: PayloadAction<IUserDocs[]>) => {
            state.docs = [...action.payload]
        },
        deleteUserDocsById: (state, action: PayloadAction<string>) => {
            state.docs = state.docs.filter((doc) =>  doc.id !== action.payload)
        },
        updateCurrentDoc: (state, action: PayloadAction<IUserDocs>) => {
            state.docs = state.docs.map(doc => {
                if(doc.id === action.payload.id) {
                    return action.payload
                }
                return doc
            })
        },
        addNewUserDoc: (state, action: PayloadAction<IUserDocs>) => {
            state.docs = [...state.docs, action.payload]
        }
    }
    }
)

export const {
    setUserDocs,
    deleteUserDocsById,
    updateCurrentDoc,
    addNewUserDoc
} = userDocsSlice.actions

export const getUserDocs = (state: RootState) => state.userDocs.docs

export default userDocsSlice.reducer