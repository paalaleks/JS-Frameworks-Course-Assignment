import Router from "next/router";
import Cookies from "js-cookie";
import { STRAPI_URL } from "../constants/api";

export const setToken = (data) => {
  if (typeof window === "undefined") {
    return;
  }
  Cookies.set("id", data.user.id);
  Cookies.set("username", data.user.username);
  Cookies.set("jwt", data.jwt);

  if (Cookies.get("username")) {
    Router.push("/admin");
  }
};

export const unsetToken = () => {
  if (typeof window === "undefined") {
    return;
  }
  Cookies.remove("id");
  Cookies.remove("jwt");
  Cookies.remove("username");

  Router.push("/");
};

export const getTokenFromLocalCookie = () => {
  return Cookies.get("jwt");
};
