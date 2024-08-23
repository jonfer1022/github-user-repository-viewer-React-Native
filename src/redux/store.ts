import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import {authSlice, repositoriesSlice, usersSlice} from './reducers';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {setAuthInitialState} from './reducers/auth.reducer';

const reducers = combineReducers({
  users: usersSlice,
  repositories: repositoriesSlice,
  auth: authSlice,
});

export const store = configureStore({
  reducer: reducers,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false}),
});

const getAsyncStorage = () => {
  AsyncStorage.multiGet(['token', 'refreshToken']).then(data => {
    store.dispatch(setAuthInitialState({isAuthenticated: !!data[0][1]}));
  });
};

getAsyncStorage();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
