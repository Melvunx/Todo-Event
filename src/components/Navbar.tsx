import { NavLink } from "react-router-dom";
import TypingAnimation from "./ui/typing-animation";

const Navbar = () => {
  return (
    <nav className="flex justify-evenly overflow-hidden bg-lime-500 px-3 py-6">
      <TypingAnimation text="Todo Event !" />
      <ul className="flex w-4/5 items-center justify-around">
        <NavLink
          to="/"
          className={(nav) =>
            nav.isActive
              ? "underline text-slate-800 transition-colors hover:text-slate-300"
              : "text-slate-600 transition-colors hover:text-slate-800"
          }
        >
          <li>Acceuil</li>
        </NavLink>
        <NavLink
          to="/date"
          className={(nav) =>
            nav.isActive
              ? "underline text-slate-800 transition-colors hover:text-slate-300"
              : "text-slate-600 transition-colors hover:text-slate-800"
          }
        >
          <li>Date Aléatoire</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
