import axios from "axios";

const instans = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "9daf39b9-2bce-4094-acbd-4d050a86e3e3",
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
    console.warn("Obsolete method. Please profileAPI object");
    return profileAPI.getProfile(userId);
  },
};

export const profileAPI = {
  getProfile(userId) {
    return instans.get(`profile/${userId}`);
  },
  getStatus(userId) {
    return instans.get(`profile/status/${userId}`);
  },
  updateStatus(status) {
    return instans.put(`profile/status`, { status });
  },
  savePhoto(photoFile) {
    const formDate = new FormData();
    formDate.append("image", photoFile);
    return instans.put(`profile/photo`, formDate, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
  saveProfile(profile) {
    return instans.put("profile", profile);
  },
};

export const authAPI = {
  me() {
    return instans.get("auth/me");
  },
  login(email, password, rememberMe = false, captcha = null) {
    return instans.post("auth/login", { email, password, rememberMe, captcha });
  },
  logout() {
    return instans.delete("auth/login");
  },
};

export const securityAPI = {
  getCaptchaUrl() {
    return instans.get("security/get-captcha-url");
  },
};
