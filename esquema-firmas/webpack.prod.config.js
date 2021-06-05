const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.config");

const esquemaFirmas_domain = "";

const prodConfig = {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
    publicPath: `${esquemaFirmas_domain}/esquema-firmas/latest/`,
  },
};

module.exports = merge(commonConfig, prodConfig);
