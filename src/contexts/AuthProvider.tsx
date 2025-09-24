import { useState } from "react";
import { AuthContext } from "./AuthContext";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [session, setSession] = useState<null | UserAPIResponse>(null);

  function save(data: UserAPIResponse) {
    setSession(data);
  }

  return (
    <AuthContext.Provider value={{ session, save }}>
      {children}
    </AuthContext.Provider>
  );
}
