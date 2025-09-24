import { createContext } from "react";

type AuthContext = {
  session: null | UserAPIResponse;
  save: (data: UserAPIResponse) => void;
};

export const AuthContext = createContext({} as AuthContext);
