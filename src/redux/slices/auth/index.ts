import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { AxiosResponse, AxiosError } from 'axios';

import axios from 'utils/axios';
import type { Thunk } from 'redux/store';

export interface Login {
  email: string;
  password: string;
}

export interface Signup {
  email: string;
  password: string;
  confirmpassword: string;
}

export interface AuthState {
  accessToken: string | null;
  authenticated: boolean;
  isLoading: boolean;
}

const initialState: AuthState = {
  accessToken: null,
  authenticated: false,
  isLoading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAccessToken: (state, action: PayloadAction<string | null>) => {
      state.accessToken = action.payload;
    },
    setAuthenticated: (state, action: PayloadAction<boolean>) => {
      state.authenticated = action.payload;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setAccessToken, setAuthenticated, setIsLoading } =
  authSlice.actions;

export default authSlice.reducer;

export const login =
  (data: Login): Thunk =>
  async (dispatch): Promise<AxiosResponse | AxiosError> => {
    dispatch(setIsLoading(true));
    try {
      const response: AxiosResponse = await axios.post('/login', data);
      dispatch(setAccessToken(response.data.token));
      dispatch(setAuthenticated(true));
      return response;
    } catch (error) {
      return error as AxiosError;
    } finally {
      dispatch(setIsLoading(false));
    }
  };

export const signup =
  (data: Signup): Thunk =>
  async (dispatch): Promise<AxiosResponse | AxiosError> => {
    dispatch(setIsLoading(true));
    try {
      const response: AxiosResponse = await axios.post('/register', data);
      dispatch(setAccessToken(response.data.token));
      dispatch(setAuthenticated(true));
      return response;
    } catch (error) {
      return error as AxiosError;
    } finally {
      dispatch(setIsLoading(false));
    }
  };

export const logout =
  (): Thunk =>
  async (dispatch): Promise<void> => {
    dispatch(setIsLoading(true));
    try {
      dispatch(setAccessToken(null));
      dispatch(setAuthenticated(false));
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setIsLoading(false));
    }
  };
