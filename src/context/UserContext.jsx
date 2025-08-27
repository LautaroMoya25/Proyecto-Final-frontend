import { createContext, useContext } from "react";

const UserContext = createContext();

export const useAuth = () => {
  return useContext(UserContext);
};

export default UserContext;