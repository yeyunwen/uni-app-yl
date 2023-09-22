import request from "../request";

export const getInfoDetail = (id) =>
  request({
    method: "GET",
    url: "/doctor/infoDetail",
    data: {
      id,
    },
  });

export const getDoctorList = () =>
  request({
    method: "GET",
    url: "/doctor/list",
  });
