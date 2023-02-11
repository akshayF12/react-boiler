import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const slice = createSlice({
  name: "users",
  initialState: {
    users: [],
  },
  reducers: {
    usersSuccess: (state, action) => {
      state.users = action.payload;
      state.isLoading = false;
    },
  },
});

export default slice.reducer
const { usersSuccess } = slice.actions;
export const fetchUsers = () => async (dispatch) => {
  try {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    dispatch(usersSuccess(res?.data))

  }catch (e) {    
    return console.error(e);
}
};
