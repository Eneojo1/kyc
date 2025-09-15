import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";

import { supabase } from "./supabase-client";

function App() {
  const [count, setCount] = useState(0);
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
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <ul>
          {sexes.map((u) => (
            <li key={u.id}>
              {u.value} {u.label}
            </li>
          ))}
        </ul>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
