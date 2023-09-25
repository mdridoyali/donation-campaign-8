import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-11/12 mx-auto">
      <nav className="flex justify-between gap-8 items-center py-5 ">
        <img className="w-28 " src="/src/assets/Logo.png"/>
        <ul className="flex gap-3 md:gap-5 mr-5 ">
          <li className=" text-base font-semibold md:text-xl">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-[#FF444A] underline"
                  : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li className=" text-base font-semibold md:text-xl">
            <NavLink
              to="/donation"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-[#FF444A]  underline"
                  : ""
              }
            >
              Donation
            </NavLink>
          </li>
          <li className=" text-base font-semibold md:text-xl">
            <NavLink
              to="/statistics"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-[#FF444A]  underline"
                  : ""
              }
            >
              Statistics
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
