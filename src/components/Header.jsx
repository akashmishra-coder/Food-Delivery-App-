import { LOGO_URL } from "../utils/constanst";
import { useState, useEffect } from "react";
import { NavLink } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
  const [buttonname, setbutton] = useState("Login");
  const [menuOpen, setMenuOpen] = useState(false);

  //subscribe to the store  to get the cart items
  const cartItems = useSelector((store) => store.cart.items);

  // close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const NavItem = ({ to, children, onClick }) => (
    <li>
      <NavLink
        to={to}
        className={(e) => (e.isActive ? "navbg px-3 py-1 rounded" : "px-3 py-1 rounded hover:bg-(--c1)/10")}
        onClick={onClick}
      >
        {children}
      </NavLink>
    </li>
  );

  return (
    <header className="w-full sticky top-0 z-50 bg-(--c2) border-b border-(--c1)/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* logo */}
          <div className="flex items-center gap-3">
            <img src={LOGO_URL} alt="logo" className="h-12 w-auto" />
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-green-600">Food Diet</h2>
          </div>

          {/* desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            <ul className="flex items-center gap-6 list-none m-0 p-0">
              <NavItem to="/">Home</NavItem>
              <NavItem to="/about">About Us</NavItem>
              <NavItem to="/contact">Contact Us</NavItem>
              <li className="relative">
                <NavLink to="/cart" className={(e) => (e.isActive ? "navbg px-3 py-1 rounded" : "px-3 py-1 rounded hover:bg-(--c1)/10") }>
                  Cart
                </NavLink>
                {cartItems.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-2 py-0.5 rounded-full">{cartItems.length}</span>
                )}
              </li>

              <button
                className="p-2 text-white h-10 bg-gray-600 cursor-pointer rounded-lg shadow"
                onClick={() => {
                  setbutton((b) => (b === "Login" ? "Logout" : "Login"));
                }}
              >
                {buttonname}
              </button>

              {/* <div className="flex items-center">
                {onlineStatus ? (
                  <img src={Online} alt="online" className="h-5 w-5" />
                ) : (
                  <img src={Ofline} alt="offline" className="h-5 w-5" />
                )}
              </div> */}
            </ul>
          </nav>

          {/* mobile controls */}
          <div className="md:hidden flex items-center gap-2">
            <div className="relative">
              <button
                className="p-2 text-sm bg-gray-700 text-white rounded"
                onClick={() => setbutton((b) => (b === "Login" ? "Logout" : "Login"))}
                aria-label="toggle auth"
              >
                {buttonname}
              </button>
            </div>

            <button
              onClick={() => setMenuOpen((s) => !s)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              className="p-2 rounded-md bg-(--c1)/5"
            >
              {menuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* mobile menu panel */}
      <div className={`md:hidden ${menuOpen ? "block" : "hidden"} bg-(--c2) border-t border-(--c1)/5`}>
        <div className="px-4 pt-4 pb-6">
          <ul className="flex flex-col items-center gap-3">
            <li>
              <NavLink to="/" className={(e) => (e.isActive ? "navbg block px-3 py-2 rounded" : "block px-3 py-2 rounded hover:bg-(--c1)/10") } onClick={() => setMenuOpen(false)}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={(e) => (e.isActive ? "navbg block px-3 py-2 rounded" : "block px-3 py-2 rounded hover:bg-(--c1)/10") } onClick={() => setMenuOpen(false)}>
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={(e) => (e.isActive ? "navbg block px-3 py-2 rounded" : "block px-3 py-2 rounded hover:bg-(--c1)/10") } onClick={() => setMenuOpen(false)}>
                Contact Us
              </NavLink>
            </li>
            <li className="flex items-center justify-between">
              <NavLink to="/cart" className={(e) => (e.isActive ? "navbg block px-3 py-2 rounded" : "block px-3 py-2 rounded hover:bg-(--c1)/10") } onClick={() => setMenuOpen(false)}>
                Cart
              </NavLink>
              {cartItems.length > 0 && (
                <span className="ml-2 bg-red-600 text-white text-xs px-2 py-0.5 rounded-full">{cartItems.length}</span>
              )}
            </li>
            {/* <li className="flex items-center gap-3 pt-2">
              {onlineStatus ? <img src={Online} alt="online" className="h-5 w-5" /> : <img src={Ofline} alt="offline" className="h-5 w-5" />}
              <span className="text-sm">{onlineStatus ? "Online" : "Offline"}</span>
            </li> */}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;