import { useEffect, useState } from "react";
import { getAllHaulers } from "../../services/haulerService";
import { useNavigate } from "react-router-dom";

export const Haulers = () => {
  const [haulers, setHaulers] = useState([]);

  const navigate = useNavigate();

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
              <button
                onClick={() => {
                  navigate(`/haulingships/${hauler.id}/edithauler`);
                }}
              >
                Edit
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};
