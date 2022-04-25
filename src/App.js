import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import RenderTests from "./pages/Tests";

import { AuthProvider } from "./context/authContext";
import { UserProvider } from "./context/userContext";


export default function App() {
  const [user, setUser] = useState();
  return (
    <AuthProvider>
      <UserProvider user={user} setUser={setUser}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/tests/disciplines" element={<RenderTests />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </AuthProvider>
  );
}
