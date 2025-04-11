import React, { useState } from "react";
import { data } from "../restApi.json";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from "react-router-dom"; // Add this

const Navbar = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate(); // Hook for routing

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center p-4 bg-gray-900 text-white shadow-lg h-16">
        <div className="logo text-2xl font-bold">DINEEASE</div>

        <div className={`${show ? "flex" : "hidden"} navLinks md:flex items-center`}>
          <div className="links flex space-x-4">
            {data[0].navbarLinks.map((element) => (
              <Link
                to={element.link}
                spy={true}
                smooth={true}
                duration={500}
                key={element.id}
                className="cursor-pointer hover:text-blue-400"
              >
                {element.title}
              </Link>
            ))}
          </div>

          {/* Reused styled button, now for login */}
          <button
            className="menuBtn bg-blue-500 text-white px-4 py-2 rounded ml-4"
            onClick={() => navigate("./login")}
          >
            LOGIN
          </button>
        </div>

        <div className="hamburger md:hidden text-2xl cursor-pointer" onClick={() => setShow(!show)}>
          <GiHamburgerMenu />
        </div>
      </nav>

      {/* Spacer to push content below navbar */}
      <div className="h-16" />
    </>
  );
};

export default Navbar;
