import { useState, useEffect } from "react";
import { deleteShip, getAllShips } from "../../services/shipService";

export const Ships = () => {
  const [ships, setShips] = useState([]);

  const getAndSetShips = async () => {
    const res = await getAllShips();
    setShips(res);
  };

  useEffect(() => {
    getAndSetShips();
  }, []);

  return (
    <>
      <h2>Shipping Ships</h2>
      <div>
        {ships.map((ship) => {
          return (
            <div key={ship.id}>
              <span>{ship.name}</span>
              <span>Hauler: {ship.hauler.name}</span>
              <button
                onClick={async () => {
                  await deleteShip(ship.id);
                  await getAndSetShips();
                }}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};
