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

    }
})
console.log(userSlice)

export default userSlice.reducer