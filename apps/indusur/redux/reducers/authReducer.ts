import { createReducer } from '@reduxjs/toolkit';
import { resetAuth, setAuth } from '../actions/authAction';

export type State = {
  auth: AuthData;
};

export type AuthData = {
  token: boolean;
};

const initialState: State = {
  auth: { token: false },
};

export const AuthReducer = createReducer(initialState, (builder) => {
  builder.addCase(setAuth, (state, action) => {
    state.auth = action.payload;
  });
  builder.addCase(resetAuth, (state) => {
    state.auth = initialState.auth;
  });
});
