import { useEffect, useState } from "react";
import { getAllHaulers } from "../../services/haulerService";

export const Haulers = () => {
  const [haulers, setHaulers] = useState([]);

  const getAndSetHaulers = () => {
    getAllHaulers().then((res) => {
      setHaulers(res);
    });
  };

  useEffect(() => {
    getAndSetHaulers();
  }, []);

  return (
    <>
      <h2>Ship Haulers</h2>
      <div>
        {haulers.map((hauler) => {
          return (
            <div key={hauler.name}>
              <span>{hauler.name}</span>
              <button>Edit</button>
            </div>
          );
        })}
      </div>
    </>
  );
};
