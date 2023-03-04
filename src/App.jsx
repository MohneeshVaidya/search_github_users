import { Error, Login, Dashboard, ProtectiveRoute, AuthWrapper } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <AuthWrapper>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectiveRoute>
                <Dashboard />
              </ProtectiveRoute>
            }
          />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </AuthWrapper>
  );
};

export default App;
