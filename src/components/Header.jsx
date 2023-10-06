import { useContext, useState } from "react";
import Logo from "../assets/FB_3.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavContext } from "../context/NavContext";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  const { activeLinkId } = useContext(NavContext);
  const navLinks = ["Home", "Work", "Contact"];

  const handleClickLogo = () => {
    document
      .getElementById("homeSection")
      .scrollIntoView({ behavior: "smooth" });
  };

  const renderNavLink = (content) => {
    const scrollToId = `${content.toLowerCase()}Section`;
    const handleClickNav = () => {
      document
        .getElementById(scrollToId)
        .scrollIntoView({ behavior: "smooth" });
      setIsMobile(false);
    };

    return (
      <ul key={content}>
        <li>
          <button
            onClick={handleClickNav}
            className={activeLinkId === content ? "active" : ""}
          >
            {content}
          </button>
        </li>
      </ul>
    );
  };
  return (
    <header className="header">
      <div className="container">
        <img onClick={handleClickLogo} className="logo" src={Logo} alt="logo" />
        <div className={isMobile ? "mobile-nav-container" : "nav-container"}>
          <nav>{navLinks.map((nav) => renderNavLink(nav))}</nav>
        </div>
        <div className="mobile-menu-icon">
          {isMobile ? (
            <FaTimes onClick={() => setIsMobile(!isMobile)} />
          ) : (
            <FaBars onClick={() => setIsMobile(!isMobile)} />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
