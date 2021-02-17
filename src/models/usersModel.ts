import { BaseModel } from 'sjs-base-model';

export default class UsersModel extends BaseModel {
    id: number = 0;
    full_name:string='';

    constructor(data) {
        super();

        this.update(data);
    }
}