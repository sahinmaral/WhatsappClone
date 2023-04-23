import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import WelcomePage from "./pages/WelcomePage";
import MainContainer from "./pages/MainContainer";
import ProtectedRoute from "./components/ProtectedRoute";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { checkUser } from "./services/firebase-auth";
import { selectUser } from "./redux/reducers/authSlice";
import NotFoundRoute from "./pages/NotFoundRoute";

function App() {
  const user = useSelector(selectUser);
  const { isLoading } = useSelector((state) => state.chat);

  const [browserTheme, setBrowserTheme] = useState(
    window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : ""
  );

  useEffect(() => {
    checkUser();
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (event) => {
        const newColorScheme = event.matches ? "dark" : "";
        setBrowserTheme(newColorScheme);
      });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage theme={browserTheme}/>} />
        <Route path="/auth/login" element={<Login theme={browserTheme}/>} />
        <Route path="/auth/register" element={<Register theme={browserTheme} />} />
        <Route
          path="/"
          element={
            <ProtectedRoute user={user} isLoading={isLoading}>
              <MainContainer />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFoundRoute theme={browserTheme} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
