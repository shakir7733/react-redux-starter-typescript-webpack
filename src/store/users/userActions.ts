import UsersEffect from './userEffect';
import ActionUtility from 'utils/actionUtility';

export default class UsersAction {
    static REQUEST_USERS = 'AuthAction.REQUEST_USERS';
    static REQUEST_USERS_FINISHED = 'AuthAction.REQUEST_USERS_FINISHED';
    static REQUEST_SINGLE_USER = 'AuthAction.REQUEST_SINGLE_USER';
    static REQUEST_SINGLE_USER_FINISHED = 'AuthAction.REQUEST_SINGLE_USER_FINISHED';

    static requestUsers() {
        return async (dispatch, getState) => {
          await ActionUtility.createThunkEffect(dispatch, UsersAction.REQUEST_USERS, UsersEffect.requestUsers);
        };
    }
    static requestUser() {
        return async (dispatch, getState) => {
          await ActionUtility.createThunkEffect(dispatch, UsersAction.REQUEST_SINGLE_USER, UsersEffect.requestSingleUser);
        };
    }

}