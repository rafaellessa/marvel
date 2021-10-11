import { NavigationContainer } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useSecureStore from "../hooks/useSecureStore";
import { navigationRef } from "../navigation";
import { AuthAction } from "../redux/reducers/reducers.auth";
import { getUser } from "../redux/selectors/selectors.auth";
import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

const Routes: React.FC = () => {
  const [accessToken, setAccessToken] = useState("");
  const [loading, setLoading] = useState(false);
  const user = useSelector(getUser);
  const { get } = useSecureStore();
  const dispatch = useDispatch();

  useEffect(() => {
    loadAccessToken();
  }, []);

  const loadAccessToken = async () => {
    const token = await get("accessToken");

    if (token.trim()) {
      setLoading(true);
      setAccessToken(token);
      dispatch(AuthAction.requestUpdateUserInformation(token));
      setLoading(false);
    }
  };

  const validateRoutes = () => {
    if (!accessToken.trim() && !Object.keys(user).length && !loading) {
      return <AppRoutes />;
    } else {
      return <AuthRoutes />;
    }
  };

  return (
    <NavigationContainer ref={navigationRef}>
      {validateRoutes()}
    </NavigationContainer>
  );
};

export default Routes;
