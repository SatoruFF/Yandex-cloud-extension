import axios from "axios";
import { AppDispatch } from "./store";
import userSlice from "./slices/userSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";

// export const fetchUsers: any = async (dispatch: AppDispatch) => {
//   try {
//     dispatch(userSlice.actions.usersFetching());
//     const response = await axios.get(
//       "https://jsonplaceholder.typicode.com/users"
//     );
//     dispatch(userSlice.actions.usersFetchingSuccess(response.data))
//   } catch (e: any) {
//     dispatch(userSlice.actions.usersFetchingError(e.message))
//   }
// };

export const fetchUsers = createAsyncThunk(
  "user/fetchAll",
  async (_, thunkAPI) => {
    const response = await axios.get(
      "http://localhost:8080/users"
    );
    return response.data;
  }
);
