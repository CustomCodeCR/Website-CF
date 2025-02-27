import React, { useState, useEffect, useRef } from "react";
import { RiCloseLine, RiMenu3Fill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  const [navbarFixed, setNavbarFixed] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showBlogDropdown, setShowBlogDropdown] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  const handleScroll = () => {
    setNavbarFixed(window.scrollY > 0);
  };

  const scrollToSection = (sectionId) => {
    const navbarHeight = 69;
    if (sectionId) {
      const section = document.getElementById(sectionId);
      const sectionPosition = section.offsetTop - navbarHeight;
      window.scrollTo({ top: sectionPosition, behavior: "smooth" });
      setSelectedOption(sectionId);
      setShowMenu(false);
    }
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  const user = JSON.parse(localStorage.getItem("users")) || {};
  const { given_name } = user;

  const logout = () => {
    localStorage.removeItem("users");
    navigate("/login");
  };

  // Detectar clics fuera del dropdown
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowBlogDropdown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* Navbar Mobile */}
      <div
        className={`md:hidden flex flex-col items-center ${
          navbarFixed
            ? "fixed top-0 left-0 right-0 bg-[#eeeff2] shadow-md w-full transition-transform transform translate-y-0"
            : "relative bg-[#eeeff2] w-full"
        }`}
        style={{ zIndex: 1000 }}
      >
        <div className="flex items-center justify-between w-full p-4">
          <Link to={"/"}>
            <img
              src="../img/logo.png"
              alt="Logo"
              className="w-[150px] h-[100px]"
            />
          </Link>
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="text-2xl p-2"
          >
            {showMenu ? (
              <RiCloseLine className="text-black" />
            ) : (
              <RiMenu3Fill className="text-black" />
            )}
          </button>
        </div>
        {showMenu && (
          <nav className="bg-[#eeeff2] text-black flex flex-col items-center gap-4 mb-10 w-full">
            <Link
              onClick={() => scrollToSection("servicios")}
              className={`${selectedOption === "servicios" ? "underline" : ""}`}
            >
              Servicios
            </Link>
            <Link
              onClick={() => scrollToSection("nosotros")}
              className={`${selectedOption === "nosotros" ? "underline" : ""}`}
            >
              Nosotros
            </Link>
            <Link
              onClick={() => scrollToSection("impacto")}
              className={`${selectedOption === "impacto" ? "underline" : ""}`}
            >
              Impacto industrial
            </Link>
            <Link
              onClick={() => scrollToSection("contacto")}
              className={`${selectedOption === "contacto" ? "underline" : ""}`}
            >
              Contacto
            </Link>

            {/* Blog Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setShowBlogDropdown(!showBlogDropdown)}
                className="focus:outline-none"
              >
                Blog
              </button>
              {showBlogDropdown && (
                <div className="absolute mt-2 w-40 bg-white border border-gray-300 shadow-lg rounded-md z-50">
                  <Link
                    to="https://blog.logisticacastrofallas.com"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    Noticias
                  </Link>
                  <Link
                    to="https://blog.logisticacastrofallas.com/#/empleo"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    Trabaja con nosotros
                  </Link>
                </div>
              )}
            </div>

            <div className="flex flex-col items-center gap-4 mt-4">
              <Link
                to="https://dashboard.logisticacastrofallas.com"
                className="text-blue-500 hover:underline"
                onClick={closeMenu}
              >
                Inicio de sesión clientes
              </Link>
              <Link
                to="/administrativos"
                className="text-blue-500 hover:underline"
                onClick={closeMenu}
              >
                Inicio de sesión administrativos
              </Link>
            </div>
          </nav>
        )}
      </div>

      {/* Navbar Desktop */}
      <nav
        className={`hidden md:flex justify-center ${
          navbarFixed
            ? "fixed top-0 left-0 right-0 bg-[#eeeff2] shadow-md w-full transition-transform transform translate-y-0"
            : "relative bg-[#eeeff2] w-full"
        }`}
        style={{ zIndex: 999 }}
      >
        <div className="max-w-[1300px] h-[69px] flex items-center justify-start gap-8 ml-[60px]">
          <Link to={"/"}>
            <img
              src="../img/logo.png"
              alt="Logo"
              className="w-[150px] h-[100px]"
            />
          </Link>
          <Link
            onClick={() => scrollToSection("servicios")}
            className={`${selectedOption === "servicios" ? "underline" : ""}`}
          >
            Servicios
          </Link>
          <Link
            onClick={() => scrollToSection("nosotros")}
            className={`${selectedOption === "nosotros" ? "underline" : ""}`}
          >
            Nosotros
          </Link>
          <Link
            onClick={() => scrollToSection("impacto")}
            className={`${selectedOption === "impacto" ? "underline" : ""}`}
          >
            Impacto industrial
          </Link>
          <Link
            onClick={() => scrollToSection("contacto")}
            className={`${selectedOption === "contacto" ? "underline" : ""}`}
          >
            Contacto
          </Link>

          {/* Blog Dropdown Desktop */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setShowBlogDropdown(!showBlogDropdown)}
              className="focus:outline-none"
            >
              Blog
            </button>
            {showBlogDropdown && (
              <div className="absolute mt-2 w-40 bg-white border border-gray-300 shadow-lg rounded-md z-50">
                <Link
                  to="https://blog.logisticacastrofallas.com"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  Noticias
                </Link>
                <Link
                  to="https://blog.logisticacastrofallas.com/#/empleo"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  Trabaja con nosotros
                </Link>
              </div>
            )}
          </div>

          <div className="flex gap-4">
            <Link
              to="https://dashboard.logisticacastrofallas.com"
              className="text-blue-500 hover:underline"
            >
              Inicio de sesión clientes
            </Link>
            <Link
              to="/administrativos"
              className="text-blue-500 hover:underline"
            >
              Inicio de sesión administrativos
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
