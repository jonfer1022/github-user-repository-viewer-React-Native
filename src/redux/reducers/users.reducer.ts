import {PayloadAction, createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {apiEndpoints} from '../../utils/endpoints/apiEndpoints';
import axiosInstance from '../../utils/axios/fetcher';
import {IUser, IUserDetail} from '../../utils/interface/user.interface';

interface IUsersState {
  error: string | null;
  loading: boolean;
  users: IUser[];
  flagUserSearched: boolean;
  userSerched: IUserDetail;
  lastSince: number | null;
}

const initialState: IUsersState = {
  error: null,
  loading: false,
  users: [],
  flagUserSearched: false,
  userSerched: {} as IUserDetail,
  lastSince: null,
};

export const getUsers = createAsyncThunk(
  'getUsers',
  async ({since = 0, per_page = 20}: any, thunkAPI) => {
    try {
      let response = await axiosInstance.get(
        apiEndpoints.getUsers(since, per_page),
      );
      return {data: response?.data, since};
    } catch (error: any) {
      console.log('-----> ~ error:', error);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

export const getUserByName = createAsyncThunk(
  'getUserByName',
  async ({name}: {name: string}, thunkAPI) => {
    try {
      const response = await axiosInstance.get(
        apiEndpoints.getUserByName(name),
      );
      return response.data;
    } catch (error: any) {
      console.log('-----> ~ error:', error);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

export const getUserById = createAsyncThunk(
  'getUserById',
  async ({id}: {id: string}, thunkAPI) => {
    try {
      const response = await axiosInstance.get(apiEndpoints.getUserById(id));
      return response.data;
    } catch (error: any) {
      console.log('-----> ~ error:', error);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

const userSlice = createSlice({
  name: 'users',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getUsers.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.users = state.flagUserSearched
          ? [...action.payload.data]
          : [...state.users, ...action.payload.data];
        state.error = null;
        state.flagUserSearched = false;
        state.lastSince = action.payload.since;
      })
      .addCase(getUsers.rejected, (state, action: PayloadAction<any>) => {
        state.users = [];
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(getUsers.pending, state => {
        state.loading = true;
      });
    builder
      .addCase(getUserByName.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.users = [action.payload];
        state.error = null;
        state.flagUserSearched = true;
        state.userSerched = action.payload;
      })
      .addCase(getUserByName.rejected, (state, action: PayloadAction<any>) => {
        state.error = action.payload;
        state.loading = false;
        state.flagUserSearched = false;
        state.users = [];
        state.userSerched = {} as IUserDetail;
      })
      .addCase(getUserByName.pending, state => {
        state.loading = true;
      });
    builder
      .addCase(getUserById.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = null;
        state.userSerched = action.payload;
      })
      .addCase(getUserById.rejected, (state, action: PayloadAction<any>) => {
        state.error = action.payload;
        state.loading = false;
        state.userSerched = {} as IUserDetail;
      })
      .addCase(getUserById.pending, state => {
        state.loading = true;
      });
  },
});

export default userSlice.reducer;
