import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import React, { useEffect, useState } from 'react';

const initialState = {
    data: []
}
export const getUsers = createAsyncThunk("users/getUsers", async () =>{
    const resp = await fetch("/users")
    const data = await resp.json()
    return data
})

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.data.push(action.payload);
          },
          deleteUser: (state, action) => {
            state.data = state.data.filter((user) => user.id !== action.payload.id);
          },
    },
    extraReducers: {
        [getUsers.pending]: (state, action) => {
          state.loading = true;
        },
        [getUsers.fulfilled]: (state, action) => {
          state.loading = false;
          state.data = action.payload;
        },
        [getUsers.rejected]: (state, action) => {
          state.loading = false;
        },
    },
})
// console.log(userSlice)

export default userSlice.reducer