import HttpErrorResponseModel from './httpErrorResponseModel';
import HttpUtility from './httpUtility';

export default class EffectUtility {
  static async getToModel(Model, endpoint, params={}) {
    const response = await HttpUtility.get(endpoint, params,{});

    return EffectUtility._restModelCreator(Model, response);
  }

  static async postToModel(Model, endpoint, data) {
    const response = await HttpUtility.post(endpoint, data);

    return EffectUtility._restModelCreator(Model, response);
  }
  static async putToModel(Model, endpoint, data) {
    const response = await HttpUtility.put(endpoint, data);

    return EffectUtility._restModelCreator(Model, response);
  }
  static async patchToModel(Model, endpoint, data) {
    const response = await HttpUtility.patch(endpoint, data);

    return EffectUtility._restModelCreator(Model, response);
  }
  static async deleteModel(endpoint, data) {
    const response = await HttpUtility.delete(endpoint);

    return {id:data,response}
  }
  static _restModelCreator(Model, response) {
    if (response instanceof HttpErrorResponseModel) {
      return response;
    }
    return !Array.isArray(response.data.data) ? new Model(response.data.data) : response.data.data.map((json) => new Model(json));
  }
}
