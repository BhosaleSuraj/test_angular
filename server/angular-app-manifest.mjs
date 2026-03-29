
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://BhosaleSuraj.github.io/test_angular/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/test_angular"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 479, hash: 'b9ccad1db6650316976cd24cb48b37803debaa0d18cdd6284b735ab05d6a1688', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 992, hash: '83910d3ddb59fc3ff269b4f340aa46717974108095ba0e148003c070055c5512', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 21595, hash: 'ffa2c5db5a4e5c8b2eee86602c75dc4224fa2c1e5f4459d3bf684eda842dac6b', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
