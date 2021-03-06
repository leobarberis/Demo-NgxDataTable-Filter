const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");
const packageJson = require("../package.json");

const prodConfig = {
  mode: "production",
  output: {
    filename: "[name].js",
    publicPath: `${container_domain}/container/latest/`,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        esquemaFirmas: `esquemaFirmas@${esquemaFirmas_domain}/remoteEntry.js`,
        // mfeRemotesEntries
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
