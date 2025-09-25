import { AuthProvider } from "./contexts/AuthProvider";
import { Routes } from "./routes";
export function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}
