import { supabase } from "./supabase-client";
import { useContext, useEffect, useState } from "react";
import "./App.scss";

import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layouts";
import { ContextApi } from "./shared/context";
import { lazy, Suspense } from "react";

const Login = lazy(() => import("./pages/Login"));

function App() {
  const { navbarHeight } = useContext(ContextApi);

  useEffect(() => {
    const root = document.documentElement.style;
    root.setProperty("--navbar-height", `${navbarHeight}px`);
    root.setProperty("--screen-height", `${(3 / 2) * navbarHeight}px`);
  }, [navbarHeight]);

  const [sexes, setSexes] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      let { data, error } = await supabase.from("genders").select("*");
      if (error) console.error(error);
      else setSexes(data);
    };
    fetchUsers();
  }, []);

  return (
    <Suspense fallback={<div>Loading page...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
