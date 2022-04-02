import { useAuth } from "hooks/useAuth";
import Router from "next/router";

const roleUrlMap = {
  staff: "/staff",
  manager: "/manager",
  hr: "/hr",
};

const HomePage = () => {
  const { staff, isLoading } = useAuth({ redirectOnNotAuth: "/login" });

  if (isLoading || !staff) {
    return <h1>Loading...</h1>;
  }

  Router.push(roleUrlMap[staff.role]);

  return <h1>Loading...</h1>;
};

export default HomePage;
