import { serialize } from "cookie";
const handleCookie = {
  loginCookie(loginToken) {
    const loginCookie = serialize("authToken", loginToken, {
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 3, //72h
      path: "/",
    });
    return loginCookie;
  },
  refreshCookie(refreshToken) {
    const refreshCookie = serialize("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 3, //72h
      path: "/",
    });
    return refreshCookie;
  },
};

export default handleCookie;
