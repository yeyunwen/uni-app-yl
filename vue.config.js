const path = require("path");
console.log(path.resolve(__dirname, "src/static/images"));

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
        "@img": path.resolve(__dirname, "src/static/images"),
      },
    },
  },
};
