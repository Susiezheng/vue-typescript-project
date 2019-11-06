const proxyJson = require('./src/proxy.json');

// 获取代理
function getProxy(proxyJson) {
  const devServerProxy = {};
  proxyJson.forEach(function (item) {
    let proxyUrl = item.proxyUrl;
    devServerProxy[proxyUrl] = {
      target: item.targetApi,
      ws: item.protocol === 'ws://',
      changeOrigin: item.changeOrigin,
      secure: false,
    };
    if (!item.notPathRewrite) {
      if (item.pathRewrite) {
        devServerProxy[proxyUrl]['pathRewrite'] = item.pathRewrite;
      } else {
        devServerProxy[proxyUrl]['pathRewrite'] = {};
        devServerProxy[proxyUrl]['pathRewrite'][proxyUrl] = '';
      }
    }
  });
  return devServerProxy;
}

module.exports = {
  publicPath: '/',//publicPath取代了baseUrl
  outputDir: 'dist',
  lintOnSave: true,
  runtimeCompiler: true, //关键点在这  原来的 Compiler 换成了 runtimeCompiler
  // 调整内部的 webpack 配置。
  // 查阅 https://github.com/vuejs/vue-doc-zh-cn/vue-cli/webpack.md
  chainWebpack: () => {
  },
  configureWebpack: () => {
  },
  pluginOptions: {
    i18n: {
      locale: 'zh',
      fallbackLocale: 'en',
      localeDir: 'lang',
      enableInSFC: true,
    },
  },
  // 配置 webpack-dev-server 行为。
  devServer: {
    open: process.platform === 'darwin',
    host: '0.0.0.0',
    port: 2020,
    https: false,
    hotOnly: false,
    // 查阅 https://github.com/vuejs/vue-doc-zh-cn/vue-cli/cli-service.md#配置代理
    proxy: getProxy(proxyJson), // string | Object
    before: app => {
    },
  },
};
