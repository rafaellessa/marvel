import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useSecureStore from "../hooks/useSecureStore";
import { AuthAction } from "../redux/reducers/reducers.auth";
import { getUser } from "../redux/selectors/selectors.auth";
import StackRoutes from "./StackRoutes";
import { TabRoutes } from "./TabRoutes";

const NavigationManager: React.FC = () => {
  const [accessToken, setAccessToken] = useState("");
  const user = useSelector(getUser);
  const dispatch = useDispatch();
  const { get } = useSecureStore();

  useEffect(() => {
    getAccessToken();
  }, []);

  const getAccessToken = async () => {
    const token = await get("accessToken");
    if (token.trim()) {
      if (!Object.keys(user).length) {
        dispatch(AuthAction.requestUpdateUserInformation(token));
      }
      setAccessToken(token);
    }
  };

  const validateNavigation = useCallback(() => {
    if (accessToken.trim()) {
      return <TabRoutes />;
    } else {
      return <StackRoutes />;
    }
  }, [user, accessToken]);

  return validateNavigation();
};

export default NavigationManager;
