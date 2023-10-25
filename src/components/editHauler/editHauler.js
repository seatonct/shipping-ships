import { getAllDocks } from "../../services/dockService";
import { useState, useEffect } from "react";

export const EditHauler = () => {
  const [docks, setDocks] = useState([]);

  useEffect(() => {
    getAllDocks().then((res) => {
      setDocks(res);
    });
  }, []);

  return (
    <>
      <h2>Edit Hauler</h2>
      <form>
        <div>
          <label>Hauler Name:</label>
          <input></input>
        </div>
        <div>
          <label>Dock:</label>
          <select>
            {docks.map((dock) => {
              return <option key={dock.id}>{dock.location}</option>;
            })}
          </select>
        </div>
        <button type="button submit">Update</button>
      </form>
    </>
  );
};
