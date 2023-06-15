import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getUsers = createAsyncThunk("users/getUsers", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return data;
});

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    loading: false,
    error: false,
  },
  // reducers: {
  //   setUsers: (state, action) => {
  //     state.users = action.payload;
  //   },
  // },
  extraReducers: {
    [getUsers.pending]: (state, action) => {
      state.loading = true;
    },
    [getUsers.fulfilled]: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
    [getUsers.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
    },
  },
});

// export const getUsers = () => {
//   return async (dispatch) => {
//     await fetch("https://jsonplaceholder.typicode.com/users")
//       .then((res) => res.json())
//       .then((json) => dispatch(setUsers(json)));
//   };
// };

export const { setUsers } = usersSlice.actions;
export default usersSlice.reducer;
