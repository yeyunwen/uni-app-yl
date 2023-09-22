import request from "../request";

export const getDoctorList = () =>
  request({
    method: "GET",
    url: "/doctor/list",
  });
