import axios from "axios";

const instans = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "cb127b63-6da2-441a-90ad-e39f78f69ee8",
  },
});

export const usersAPI = {
  getUsers(currentPage, pageSize) {
    return instans
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },
  follow(userId) {
    return instans.post(`follow/${userId}`);
  },
  unfollow(userId) {
    return instans.delete(`follow/${userId}`);
  },
  getProfile(userId) {
    return instans.get(`profile/${userId}`);
  },
};

export const authAPI = {
  me() {
    return instans.get("auth/me");
  },
};
