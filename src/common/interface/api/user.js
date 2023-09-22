import request from "../request";

// 收藏医生
export const getCollectDoctors = (id = 2) =>
  request({
    method: "GET",
    url: "/user/collectDoctors",
    data: {
      id,
    },
  });
