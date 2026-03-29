
export default {
  basePath: 'https://BhosaleSuraj.github.io/test_angular',
  allowedHosts: [],
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
