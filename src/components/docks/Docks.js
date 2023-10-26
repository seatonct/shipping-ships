import { useEffect, useState } from "react";
import { getAllDocks } from "../../services/dockService";

export const Docks = () => {
  const [docks, setDocks] = useState([]);

  useEffect(() => {
    getAllDocks().then((res) => {
      setDocks(res);
    });
  }, []);

  return (
    <>
      <h2>Docks</h2>
      <ul>
        {docks.map((dock) => {
          return (
            <li key={dock.id}>
              <span>Location: {dock.location}; </span>
              <span>Capacity: {dock.capacity}</span>
              {dock.haulers.length > 0 ? (
                <div>
                  <label>Hauling Ships Docking Here:</label>
                  <ul>
                    {dock.haulers.map((hauler) => {
                      return <li key={hauler.id}>{hauler.name}</li>;
                    })}
                  </ul>
                </div>
              ) : (
                ""
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
};
