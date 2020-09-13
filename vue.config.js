/* eslint-disable @typescript-eslint/no-var-requires */
const merge = require("webpack-merge");
const tsImportPluginFactory = require("ts-import-plugin");
const pxtoviewport = require("postcss-px-to-viewport");
const path = require("path");
const autoprefixer = require("autoprefixer");

const proxyUrl = "https://www.huiman.top";
// const proxyUrl = 'http://localhost:6200';

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  parallel: false,
  devServer: {
    open: true,
    port: 9527,
    proxy: {
      "/api": {
        target: proxyUrl,
        ws: true,
        changeOrigin: true,
      },
    },
  },
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            "nav-bar-arrow-size": "20px",
            "nav-bar-text-color": "#ffffff",
            "nav-bar-icon-color": "#ffffff",
            "nav-bar-background-color": "#67CCFF",
            "nav-bar-title-text-color": "#ffffff",
            "tab-active-text-color": "#67CCFF",
          },
        },
      },
      postcss: {
        plugins: [
          autoprefixer(),
          pxtoviewport({
            viewportWidth: 375,
          }),
        ],
      },
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": resolve("src"),
      },
    },
  },
  chainWebpack: (config) => {
    config.module
      .rule("ts")
      .use("ts-loader")
      .tap((options) => {
        options = merge(options, {
          transpileOnly: true,
          getCustomTransformers: () => ({
            before: [
              tsImportPluginFactory({
                libraryName: "vant",
                libraryDirectory: "es",
                style: true,
              }),
            ],
          }),
          compilerOptions: {
            module: "es2015",
          },
        });
        return options;
      });
  },
};
