import { BrowserRouter, Route, Routes } from "react-router-dom";

import WelcomePage from "./pages/WelcomePage";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import MainContainer from "./pages/MainContainer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="welcome" element={<WelcomePage />} />
        <Route path="/" element={<MainContainer />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
