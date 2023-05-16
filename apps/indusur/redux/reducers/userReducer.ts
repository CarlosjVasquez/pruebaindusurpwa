import { createReducer } from '@reduxjs/toolkit';
import { resetUserData, setUserData } from '../actions/userAction';

export type State = {
  user: UserData;
};

export type UserData = {
  name: string;
  imgUser: string;
};

const initialState: State = {
  user: { name: '', imgUser: '' },
};

export const UserReducer = createReducer(initialState, (builder) => {
  builder.addCase(setUserData, (state, action) => {
    state.user = action.payload;
  });
  builder.addCase(resetUserData, (state) => {
    state.user = initialState.user;
  });
});
