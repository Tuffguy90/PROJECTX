// types
import { createSlice } from '@reduxjs/toolkit';

// initial state
const initialState = {
    userData:{}
};

// ==============================|| SLICE - MENU ||============================== //

const user = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userData(state, action) {
            state.userData = action.payload.userData;
        },
    }
});

export default user.reducer;

export const { userData } = user.actions;
