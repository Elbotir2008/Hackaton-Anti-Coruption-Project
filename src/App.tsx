import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Tables from "./pages/tables/Tables";
import Header from "./components/header/Header";
import { useState } from "react";

function App() {
  const [dark, setDark] = useState(false);
  const [selectLan, setSelectLan] = useState("Uzbek");

  console.log(selectLan);

  return (
    <div>
      <Header
        dark={dark}
        setDark={setDark}
        selectLan={selectLan}
        setSelectLan={setSelectLan}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Dashboard
              dark={dark}
              selectLan={selectLan}
              setSelectLan={selectLan}
            />
          }
        />
        <Route
          path="tables"
          element={
            <Tables
              dark={dark}
              setSelectLan={setSelectLan}
              selectLan={selectLan}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
