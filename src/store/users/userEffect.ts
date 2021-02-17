import environment from 'environment';
import HttpErrorResponseModel from 'utils/httpErrorResponseModel';
import HttpUtility from 'utils/httpUtility';
import UsersModel from '../../models/usersModel';
import EffectUtility from 'utils/effectUtility';

export default class UsersEffect {
    static async requestUsers() {
        const endpoint = environment.api;
        // const endpoint = environment.api.Users;
        return await EffectUtility.getToModel(UsersModel,endpoint);
    }
    static async requestSingleUser(id){
        const endpoint = environment.api;
        // const endpoint = environment.api.Users + `/${id}/`;
        return await EffectUtility.getToModel(UsersModel,endpoint); 
    }
}