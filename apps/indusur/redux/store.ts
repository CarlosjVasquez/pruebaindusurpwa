import {
  AnyAction,
  applyMiddleware,
  combineReducers,
  createStore,
} from '@reduxjs/toolkit';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { AuthReducer } from './reducers/authReducer';
import { UserReducer } from './reducers/userReducer';

const SET_CLIENT_STATE = 'SET_CLIENT_STATE';

const combinedReducer = combineReducers({
  auth: AuthReducer,
  user: UserReducer,
});

const reducer = (
  state: ReturnType<typeof combinedReducer>,
  action: AnyAction
) => {
  if (action.type === HYDRATE) {
    return {
      ...state,
      ...action.payload,
    };
  } else {
    return combinedReducer(state, action);
  }
};

const makeConfiguredStore = (red) =>
  createStore(red, undefined, applyMiddleware(logger));

export const makeStore = () => {
  const isServer = typeof window === 'undefined';

  if (isServer) {
    return makeConfiguredStore(reducer);
  } else {
    const persistConfig = {
      key: 'nextjs',
      whitelist: [''],
      storage,
    };

    const persistedReducer = persistReducer(persistConfig, reducer);
    const store: any = makeConfiguredStore(persistedReducer);

    store.__persistor = persistStore(store);

    return store;
  }
};

export const wrapper: any = createWrapper(makeStore, { debug: true });

export type AppDispatch = typeof wrapper.dispatch;
export type RootState = ReturnType<typeof wrapper.getState>;

export const setClientState = (clientState) => ({
  type: SET_CLIENT_STATE,
  payload: clientState,
});
