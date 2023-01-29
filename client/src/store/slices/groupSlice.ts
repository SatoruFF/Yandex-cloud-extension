import { createSlice } from "@reduxjs/toolkit";

interface groupState {
  loading: boolean;
  error: string;
  groups: any;
}

const initialState: groupState = {
  loading: false,
  error: "",
  groups: [],
};

export const groupSlice = createSlice({
  name: "group",
  initialState,
  reducers: {},
});
