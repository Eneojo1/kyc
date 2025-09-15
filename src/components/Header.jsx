import { useContext, useEffect, useRef, useState } from "react";
import { ContextApi } from "../shared/context";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import SmartLink from "./SmartLink";
import { styles } from "../shared/helpers";

const Header = ({ sections }) => {
  const { setNavbarHeight } = useContext(ContextApi);
  const [active, setActive] = useState("Home");
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  // const navigate = useNavigate();
  const navRef = useRef();

  useEffect(() => {
    if (navRef.current) {
      setNavbarHeight(navRef.current.offsetHeight);
    }
  }, []);

  const handleSetActive = (section) => setActive(section);

  const handleClick = () => {
    if (user) {
      navigate("/dashboard");
    } else {
      navigate("/login");
    }
  };

  return (
    // <nav ref={navRef} className="text-lg bg-[#114036]">
    <nav ref={navRef} className="text-lg p-2 pb-0 sm:px-6 sm:py-4">
      <div className="flex items-center justify-between w-full sm:w-auto">
        <div className="flex gap-2">
          <img src="/logo1.png" className="logo w-10" alt="logo" />
          <img src="/logo2.png" className="w-30 h-10" alt="logo" />
        </div>
        <button
          onClick={toggleMenu}
          className={`!bg-[#15af8d] text-[#fff] sm:hidden transition-colors`}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      <ul
        className={styles(
          "menu-transition",
          isOpen ? "menu-open" : "menu-closed"
        )}
      >
        {sections.map((s, i) => (
          <li key={i}>
            <SmartLink
              label={s.name}
              onClick={() => setIsOpen(false)}
              onSetActive={handleSetActive}
              className={active === s.name ? "active-tab" : "link"}
            />
          </li>
        ))}
        <li>
          <Link
            to="/login"
            className="bg-[#ffdd6c] whitespace-nowrap !text-[#114036] text-sm font-bold cursor-pointer rounded-lg p-1"
          >
            Log in
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
