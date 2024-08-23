import {PayloadAction, createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {apiEndpoints} from '../../utils/endpoints/apiEndpoints';
import axiosInstance from '../../utils/axios/fetcher';
import {
  IRepository,
  IRepositoryDetail,
} from '../../utils/interface/repository.interface';

interface IRepositoriesState {
  error: any;
  loading: boolean;
  repositories: IRepository[];
  flagRepositorySearched: boolean;
  repositorySearched: IRepositoryDetail;
  lastSince: number | null;
}

const initialState: IRepositoriesState = {
  error: null,
  loading: false,
  repositories: [],
  flagRepositorySearched: false,
  repositorySearched: {} as IRepositoryDetail,
  lastSince: null,
};

export const getRepositories = createAsyncThunk(
  'getRepositories',
  async ({since = 1}: any, thunkAPI) => {
    try {
      const response = await axiosInstance.get(
        apiEndpoints.getRepositories(since),
      );
      return {data: response?.data, since};
    } catch (error: any) {
      console.log('-----> ~ error:', error);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

export const getRepositoryByPath = createAsyncThunk(
  'getRepositoryByPath',
  async ({path}: {path: string}, thunkAPI) => {
    try {
      const response = await axiosInstance.get(
        apiEndpoints.getRepositoryByPath(path),
      );
      return response.data;
    } catch (error: any) {
      console.log('-----> ~ error:', error);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

export const getRepositoryByNameAndPath = createAsyncThunk(
  'getRepositoryByNameAndPath',
  async ({name, repo}: {name: string; repo: string}, thunkAPI) => {
    try {
      const path = `${name}/${repo}`;
      const response = await axiosInstance.get(
        apiEndpoints.getRepositoryByPath(path),
      );
      return response.data;
    } catch (error: any) {
      console.log('-----> ~ error:', error);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

const repositoriesSlice = createSlice({
  name: 'repositories',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getRepositories.pending, state => {
        state.loading = true;
      })
      .addCase(
        getRepositories.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.loading = false;
          state.repositories = state.flagRepositorySearched
            ? [...action.payload.data]
            : [...state.repositories, ...action.payload.data];
          state.flagRepositorySearched = false;
          state.error = null;
          state.lastSince = action.payload.since;
        },
      )
      .addCase(
        getRepositories.rejected,
        (state, action: PayloadAction<any>) => {
          state.repositories = [];
          state.loading = false;
          state.error = action.payload;
        },
      );
    builder
      .addCase(
        getRepositoryByPath.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.loading = false;
          state.repositories = [action.payload];
          state.error = null;
          state.flagRepositorySearched = true;
          state.repositorySearched = action.payload;
        },
      )
      .addCase(
        getRepositoryByPath.rejected,
        (state, action: PayloadAction<any>) => {
          state.repositories = [];
          state.error = action.payload;
          state.loading = false;
          state.repositorySearched = {} as IRepositoryDetail;
          state.flagRepositorySearched = false;
        },
      )
      .addCase(getRepositoryByPath.pending, state => {
        state.loading = true;
      });
    builder
      .addCase(
        getRepositoryByNameAndPath.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.loading = false;
          state.error = null;
          state.repositorySearched = action.payload;
        },
      )
      .addCase(
        getRepositoryByNameAndPath.rejected,
        (state, action: PayloadAction<any>) => {
          state.error = action.payload;
          state.loading = false;
          state.repositorySearched = {} as IRepositoryDetail;
        },
      )
      .addCase(getRepositoryByNameAndPath.pending, state => {
        state.loading = true;
      });
  },
});

export default repositoriesSlice.reducer;
