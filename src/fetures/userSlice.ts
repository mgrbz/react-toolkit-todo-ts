import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, UserState } from "../types/user";
import { api } from "../utils/api";


const initialState: UserState = {
  data: null,
  loading: false,
  error: ""
}

export const fetchUser = createAsyncThunk("fetchUser", async() => {
    const response = await api.get<User>('/api/');
    return response.data;
});


const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchUser.fulfilled, (state, action: PayloadAction<User>) => {
      state.error = "";
      state.loading = false
      state.data = action.payload;
    });
    builder.addCase(fetchUser.rejected, (state, action) => {
      state.error = "User cannot fetching";
      state.loading = false;
    })

  }
})

export default userSlice.reducer;
