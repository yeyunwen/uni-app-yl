const path = require("path");
console.log(path.resolve(__dirname, "src/static/images"));

module.exports = {
  // 默认情况下 babel-loader 会忽略所有 node_modules 中的文件。
  // 启用本选项，以避免构建后的代码中出现未转译的第三方依赖。
  transpileDependencies: ["@dcloudio/uni-ui"],
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
        "@api": path.resolve(__dirname, "src/common/interface/api"),
        "@img": path.resolve(__dirname, "src/static/images"),
      },
    },
  },
};
