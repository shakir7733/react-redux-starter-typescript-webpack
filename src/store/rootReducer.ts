
import ErrorReducer from './error/errorReducer';
import UserReducer from './users/userReducer';
import RequestingReducer from './requesting/requestingReducer';
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import ToastsReducer from './toasts/toastsReducer';

  
export default (history) => {
    const reducerMap = {
      error: ErrorReducer.reducer,
      requesting: RequestingReducer.reducer,
      treksReducer:new UserReducer().reducer,

      toasts: new ToastsReducer().reducer,
      router: connectRouter(history),
    };
  
    return combineReducers(reducerMap);
};
  