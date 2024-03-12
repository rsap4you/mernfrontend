import { createSlice } from "@reduxjs/toolkit";
import { loginRedux } from "../actions/userAction";
import { registerRedux } from "../actions/userAction";
// import { otpVerificationRedux } from "../actions/userAction";
import { userApiRedux } from "../actions/userAction";
import { userEditsApiRedux } from "../actions/userAction";

import { activeInactiveApiRedux } from "../actions/userAction";

import { deleteUserApiRedux } from "../actions/userAction";

const userSlice = createSlice({
    name: "users",
    initialState: {
        isLoading: false,
        data: null,
        isLoggedIn: false,
        isError: false
    },
    reducers: {
        clearReduxStore(state, action) {
            return [];
        },
    },
    extraReducers: (builder) => {
        // login User
        builder.addCase(loginRedux.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(loginRedux.fulfilled, (state, action) => {
            state.isLoading = false;
            if (action.payload.code == 200) {
                state.isLoggedIn = true
                state.data = action.payload;
            }
        })
        builder.addCase(loginRedux.rejected, (state, action) => {
            console.log("ERROR", action.payload);
            state.isLoading = false;
            state.isError = true
        })
        // // // // register User
        builder.addCase(registerRedux.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(registerRedux.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        })
        builder.addCase(registerRedux.rejected, (state, action) => {
            console.log("ERROR", action.payload);
            state.isLoading = false;
            state.isError = true
        })


        // UserLIst redux  slice 
        builder.addCase(userApiRedux.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(userApiRedux.fulfilled, (state, action) => {
            if (action.payload.code == 200) {
                state.isLoggedIn = true
                state.data = action.payload;
            }
            state.isLoading = false;
        })
        builder.addCase(userApiRedux.rejected, (state, action) => {
            console.log("ERROR", action.payload);
            state.isLoading = false;
            state.isError = true
        })

        // edit user redux slice 

        builder.addCase(userEditsApiRedux.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(userEditsApiRedux.fulfilled, (state, action) => {
            if (action.payload.code == 200) {
                state.isLoggedIn = true
                state.data = action.payload;
            }
            state.isLoading = false;
        })
        builder.addCase(userEditsApiRedux.rejected, (state, action) => {
            console.log("ERROR", action.payload);
            state.isLoading = false;
            state.isError = true
        })


        // active inactive slice 


        builder.addCase(activeInactiveApiRedux.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(activeInactiveApiRedux.fulfilled, (state, action) => {
            if (action.payload.code == 200) {
                state.isLoggedIn = true
                // state.data = action.payload;
            }
            state.isLoading = false;
        })
        builder.addCase(activeInactiveApiRedux.rejected, (state, action) => {
            console.log("ERROR", action.payload);
            state.isLoading = false;
            state.isError = true
        })




        builder.addCase(deleteUserApiRedux.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(deleteUserApiRedux.fulfilled, (state, action) => {
            if (action.payload.code == 200) {
                state.isLoggedIn = true
                // state.data = action.payload;
            }
            state.isLoading = false;
        })
        builder.addCase(deleteUserApiRedux.rejected, (state, action) => {
            console.log("ERROR", action.payload);
            state.isLoading = false;
            state.isError = true
        })

   
    },
});

export default userSlice.reducer;
export const { clearReduxStore } = userSlice.actions;