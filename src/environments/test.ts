import environment from './base';

const baseApi = '/';
const env = environment(baseApi);

const testEnv = {
  ...env,
  // override anything that gets added from base.
  isProduction: false,
  isDevelopment: true,
  isTesting: true,
};

export default testEnv;
