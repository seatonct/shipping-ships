import { getAllShips } from "../../services/shipService";
import { getAllHaulers } from "../../services/haulerService";
import { getAllDocks } from "../../services/dockService";
import { useEffect, useState } from "react";

export const Home = () => {
  const [ships, setShips] = useState([]);
  const [haulers, setHaulers] = useState([]);
  const [docks, setDocks] = useState([]);

  useEffect(() => {
    getAllShips().then((shipsArray) => {
      setShips(shipsArray);
    });
    getAllHaulers().then((haulersArray) => {
      setHaulers(haulersArray);
    });
    getAllDocks().then((docksArray) => {
      setDocks(docksArray);
    });
  }, []);

  return (
    <div>
      <h1>Welcome to Shipping Ships!</h1>
      <section>
        <div>
          <h2>Ships</h2>
          <ul>
            {ships.map((ship) => {
              return <li>{ship.name}</li>;
            })}
          </ul>
        </div>
        <div>
          <h2>Haulers</h2>
          <ul>
            {haulers.map((hauler) => {
              return <li>{hauler.name}</li>;
            })}
          </ul>
        </div>
        <div>
          <h2>Docks</h2>
          <ul>
            {docks.map((dock) => {
              return <li>{dock.location}</li>;
            })}
          </ul>
        </div>
      </section>
    </div>
  );
};
