import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "../actionCreators";

interface userState {
  isLoading: boolean;
  userError: string;
  users: any;
  isAuth: boolean;
  currentUser: any;
  token: string,
}

const initialState: userState = {
  users: [],
  isLoading: false,
  userError: "",
  isAuth: false,
  currentUser: {},
  token: '',
};

const userSlice: any = createSlice({
  name: "user",
  initialState,
  reducers: {
    // usersFetching(state) {
    //   state.isLoading = true;
    // },
    // usersFetchingSuccess(state, action) {
    //   state.isLoading = false;
    //   state.userError = "";
    //   state.users = action.payload;
    // },
    // usersFetchingError(state, action) {
    //   state.isLoading = false;
    //   state.userError = action.payload;
    // },
    setToken(state, action) {
      state.token = action.payload
    },
    setCurrentUser(state, action) {
      state.currentUser = action.payload
    },
    isAuthFunc(action) {
      action.isAuth = true;
    },
    exitAuthFunc(action) {
      action.isAuth = false;
    },
  },
  extraReducers: {
    [fetchUsers.fulfilled.type]: (state, action) => {
      state.isLoading = false;
      state.userError = "";
      state.users = action.payload;
    },
    [fetchUsers.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchUsers.rejected.type]: (state, action) => {
      state.isLoading = false;
      state.userError = action.payload;
    },
  },
});

export const { isAuthFunc, exitAuthFunc, setCurrentUser, setToken } = userSlice.actions;
export default userSlice.reducer;
