import { createAction } from '@reduxjs/toolkit';
import { UserData } from '../reducers/userReducer';

export const setUserData = createAction<UserData>('user/setUserData');
export const resetUserData = createAction<UserData>('user/resetUserData');
