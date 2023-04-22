import { BrowserRouter, Route, Routes } from "react-router-dom";

import WelcomePage from "./pages/WelcomePage";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import MainContainer from "./pages/MainContainer";
import ProtectedRoute from "./components/ProtectedRoute";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { checkUser } from "./services/firebase-auth";

function App() {
  const { user } = useSelector((state) => state.auth);
  const { isLoading } = useSelector((state) => state.chat);

  useEffect(() => {
    checkUser();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="welcome" element={<WelcomePage />} />
        <Route
          path="/"
          element={
            <ProtectedRoute user={user} isLoading={isLoading}>
              <MainContainer />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
