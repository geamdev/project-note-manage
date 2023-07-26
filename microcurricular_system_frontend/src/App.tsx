import { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Login, Register, NotFound, Home } from "./pages";
import supabase from "./supabase/client";

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.onAuthStateChange((_event, session) => {
      if (!session) {
        if (location.pathname === "/register") return;
        navigate("/login");
      } else {
        navigate("/");
      }
    });
  }, [navigate]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
