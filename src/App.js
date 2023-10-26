import "./App.css";
import { Route, Routes, Outlet } from "react-router-dom";
import { NavBar } from "./components/nav/NavBar";
import { Home } from "./components/home/Home";
import { Ships } from "./components/ships/ships";
import { Haulers } from "./components/haulers/Hauler";
import { EditHauler } from "./components/editHauler/editHauler";
import { Docks } from "./components/docks/Docks";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <NavBar />
              <Outlet />
            </>
          }
        >
          <Route index element={<Home />} />
          <Route path="/ShippingShips" element={<Ships />} />
          <Route path="haulingships">
            <Route index element={<Haulers />} />
            <Route path=":haulerId/edithauler" element={<EditHauler />} />
          </Route>
          <Route path="/docks" element={<Docks />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
