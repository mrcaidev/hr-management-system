import { MeResponse } from "interfaces/api/me";
import Cookies from "js-cookie";
import Router from "next/router";
import { useCallback } from "react";
import useSWR from "swr";
import { requests } from "utils/requests";

interface Config {
  redirectOnAuth?: string;
  redirectOnNotAuth?: string;
}

export const useAuth = (config: Config = {}) => {
  const { data } = useSWR<MeResponse>("me", requests.get);
  const logout = useCallback(() => {
    Cookies.remove("token");
    Router.reload();
  }, []);

  // If data has not arriven yet.
  if (!data) {
    return { staff: undefined, isLoading: true, logout: () => {} };
  }

  // On arrival, extract staff info.
  const { data: staff } = data;
  const { redirectOnAuth, redirectOnNotAuth } = config;

  // Redirect if unauthenticated.
  if (!staff && redirectOnNotAuth) {
    Router.push(redirectOnNotAuth);
  }

  // Redirect if authenticated.
  if (staff && redirectOnAuth) {
    Router.push(redirectOnAuth);
  }

  return { staff, isLoading: false, logout };
};
