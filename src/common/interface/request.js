const baseUrl = "http://localhost:3000/api";

const httpInterceptor = {
  invoke(options) {
    if (!options.url.startsWith("http")) {
      options.url = baseUrl + options.url;
    }
    options.timeout = 10000;
  },
};

uni.addInterceptor("request", httpInterceptor);

const request = (options) => {
  return new Promise((resolve, reject) => {
    uni.request({
      ...options,
      success(res) {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve(res.data);
        } else if (res.statusCode == 401) {
          uni.navigateTo({ url: "/pages/login/login" });
          reject(res);
        } else {
          uni.showToast({
            icon: "none",
            title: res.data.msg,
          });
          reject(res);
        }
      },
      fail(err) {
        uni.showToast({
          icon: "none",
          title: "网络错误，换个网络试试",
        });
        reject(err);
      },
    });
  });
};

export default request;
