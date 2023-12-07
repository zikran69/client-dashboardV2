import Cookies from "js-cookie";

const auth = {
  isAuthenticated: () => {
    return Cookies.get("token");
  },
  storeAuthCredential: (token) => {
    return Cookies.set("token", token);
  },
  logout: () => {
    Cookies.remove("token");
    Cookies.remove("userName");
    return;
  },
  isUserName: () => {
    return Cookies.get("userName");
  },
  storeUserName: (userName) => {
    return Cookies.set("userName", userName);
  },
};

export default auth;
