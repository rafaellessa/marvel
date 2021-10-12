import { NavigationContainer } from "@react-navigation/native";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useSecureStore from "../hooks/useSecureStore";
import { navigationRef } from "../navigation";
import { AuthAction } from "../redux/reducers/reducers.auth";
import { getUser } from "../redux/selectors/selectors.auth";
import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

const Routes: React.FC = () => {
  const user = useSelector(getUser);
  const { get } = useSecureStore();
  const dispatch = useDispatch();

  useEffect(() => {
    loadAccessToken();
  }, []);

  const loadAccessToken = async () => {
    const token = await get("accessToken");

    if (token.trim()) {
      dispatch(AuthAction.requestUpdateUserInformation(token));
    }
  };

  const validateRoutes = () => {
    if (!Object.keys(user).length) {
      return <AppRoutes />;
    }
    return <AuthRoutes />;
  };

  return (
    <NavigationContainer ref={navigationRef}>
      {validateRoutes()}
    </NavigationContainer>
  );
};

export default Routes;
