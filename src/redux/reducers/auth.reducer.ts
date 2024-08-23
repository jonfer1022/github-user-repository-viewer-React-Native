import AsyncStorage from '@react-native-async-storage/async-storage';
import {PayloadAction, createSlice} from '@reduxjs/toolkit';

interface IAuthState {
  isAuthenticated: boolean;
  user: any | null;
  error: string | null;
  loading: boolean;
}

const initialState: IAuthState = {
  isAuthenticated: false,
  user: null,
  error: null,
  loading: false,
};

const authSlice = createSlice({
  name: 'tokens',
  initialState: initialState,
  reducers: {
    setAuthInitialState: (state, action: PayloadAction<any>) => {
      state.isAuthenticated = action.payload.isAuthenticated;
      state.loading = false;
    },
    login: state => {
      state.isAuthenticated = true;
      state.user = null;
      state.error = null;
      state.loading = false;
      AsyncStorage.setItem('token', 'token');
      AsyncStorage.setItem('refreshToken', 'refreshToken');
    },
    logout: state => {
      state.isAuthenticated = false;
      state.user = null;
      state.error = null;
      state.loading = false;
      AsyncStorage.removeItem('token');
      AsyncStorage.removeItem('refreshToken');
    },
  },
});

export default authSlice.reducer;
export const {setAuthInitialState, login, logout} = authSlice.actions;
