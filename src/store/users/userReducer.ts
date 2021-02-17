import UserAction from './userActions';
import BaseReducer from 'utils/baseReducer';

export default class UsersReducer extends BaseReducer {
    initialState = {
        users:[],
        user:[],
        loading:false
    };
    [UserAction.REQUEST_USERS_FINISHED](state, action) {
        return {
          ...state,
          users: action.payload,
        };
    };
    [UserAction.REQUEST_SINGLE_USER_FINISHED](state, action) {
        return {
          ...state,
          user: action.payload,
        };
    };

}