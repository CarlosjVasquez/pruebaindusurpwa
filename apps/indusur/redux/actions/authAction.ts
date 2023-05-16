import { createAction } from '@reduxjs/toolkit';
import { AuthData } from '../reducers/authReducer';

export const setAuth = createAction<AuthData>('auth/setAuth');
export const resetAuth = createAction<AuthData>('auth/resetAuth');
