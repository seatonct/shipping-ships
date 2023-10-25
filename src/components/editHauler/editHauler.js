import { useNavigate, useParams } from "react-router-dom";
import { getAllDocks } from "../../services/dockService";
import { useState, useEffect } from "react";
import { editHauler, getHaulerById } from "../../services/haulerService";

export const EditHauler = () => {
  const [docks, setDocks] = useState([]);
  const [hauler, setHauler] = useState({});

  const { haulerId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getHaulerById(haulerId).then((res) => {
      setHauler(res);
    });
  }, [haulerId]);

  useEffect(() => {
    getAllDocks().then((res) => {
      setDocks(res);
    });
  }, []);

  const handleSave = (event) => {
    event.preventDefault();

    const updatedHauler = {
      id: hauler.id,
      name: hauler.name,
      dock_id: hauler.dock_id,
    };

    editHauler(updatedHauler).then(() => {
      navigate(`/haulingships`);
    });
  };

  return (
    <>
      <h2>Edit Hauler</h2>
      <form onSubmit={handleSave}>
        <div>
          <label>Hauler Name:</label>
          <input
            name="name"
            value={hauler.name ? hauler.name : ""}
            type="text"
            placeholder="Enter a name for the hauler"
            onChange={(event) => {
              const haulerCopy = { ...hauler };
              haulerCopy.name = event.target.value;
              setHauler(haulerCopy);
            }}
          ></input>
        </div>
        <div>
          <label>Dock:</label>
          <select
            name="dock_id"
            value={hauler.dock_id}
            onChange={(event) => {
              const haulerCopy = { ...hauler };
              haulerCopy.dock_id = parseInt(event.target.value);
              setHauler(haulerCopy);
            }}
          >
            {docks.map((dock) => {
              return (
                <option key={dock.id} value={dock.id}>
                  {dock.location}
                </option>
              );
            })}
          </select>
        </div>
        <button type="button submit">Update</button>
      </form>
    </>
  );
};
