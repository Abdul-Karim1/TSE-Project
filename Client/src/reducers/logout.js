import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "auth",
    reducers: {
        setLogout: (state) => {
            state.user = null;
            state.token = null;
        },
    },
});

export const { setLogout } =
    authSlice.actions;
export default authSlice.reducer;