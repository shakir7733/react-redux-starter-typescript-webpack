export default function baseEnv(baseApi) {
  const baseUrl = '';
  // const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href') as string;
    return {
      route: {
        baseRoute: '/', // Fixes issue with Github Pages
      },
      api: {
      },
      isProduction: true,
      isDevelopment: false,
      isStaging: false,
      isTesting: false,
    };
  }
  