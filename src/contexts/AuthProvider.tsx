import { useState } from "react";
import { AuthContext } from "./AuthContext";

const LOCAL_STORAGE_KEY = "@refund";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [session, setSession] = useState<null | UserAPIResponse>(null);

  function save(data: UserAPIResponse) {
    localStorage.setItem(
      `${LOCAL_STORAGE_KEY}:user`,
      JSON.stringify(data.user),
    );
    localStorage.setItem(`${LOCAL_STORAGE_KEY}: token`, data.token);

    setSession(data);
  }

  return (
    <AuthContext.Provider value={{ session, save }}>
      {children}
    </AuthContext.Provider>
  );
}
