import { Link } from "react-router-dom";
import "./NavBar.css";

export const NavBar = () => {
  return (
    <ul className="navbar">
      <li className="navbar_item">
        <Link to="/ShippingShips">Ships</Link>
      </li>
      <li className="navbar_item">
        <Link to="/haulingships">Haulers</Link>
      </li>
      <li className="navbar_item">
        <Link to="/docks">Docks</Link>
      </li>
    </ul>
  );
};
