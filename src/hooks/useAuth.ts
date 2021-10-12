import { AuthAction } from "./../redux/reducers/reducers.auth";
import { useDispatch } from "react-redux";
import useSecureStore from "./useSecureStore";
const useAuth = () => {
  const dispatch = useDispatch();
  const { destroy } = useSecureStore();

  const handleLogoff = async () => {
    await destroy("accessToken");
    dispatch(AuthAction.reset());
  };

  return {
    logoff: () => handleLogoff(),
  };
};

export default useAuth;
