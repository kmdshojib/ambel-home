import React from "react";
import logo from "../../../assets/logo.png";
import arrowDown from "../../../assets/downArrow.svg";
import "./nav.css";

const defaultNavigationItems = [
    { text: "Features", link: "#features", hasDropdown: true },
    { text: "Pricing", link: "http://localhost:3001/", hasDropdown: false },
    { text: "Solutions", link: "#", hasDropdown: true },
    { text: "Resources", link: "#", hasDropdown: true },
    { text: "Find Professionals", link: "#", hasDropdown: false },
    { text: "Help", link: "#", hasDropdown: true },
];

export const NavItem = ({ text, hasDropdown, link = "#" }) => (
    <a href={link} className="navItem" role="button" tabIndex={0}>
        <span className="navText">{text}</span>
        {hasDropdown && (
            <img
                src={arrowDown}
                className="dropdownIcon"
                alt="Dropdown icon"
            />
        )}
    </a>
);

const Navigation = ({
    links = defaultNavigationItems,
    isDrawerOpen,
    toggleDrawer,
    closeDrawer,
}) => {
    const handleClickOutside = (e) => {
        if (e.target.classList.contains("drawerBackdrop")) {
            closeDrawer();
        }
    };

    // React.useEffect(() => {
    //     const handleKeyDown = (e) => {
    //         if (e.key === "Escape" && isDrawerOpen) closeDrawer();
    //     };

    //     document.addEventListener("keydown", handleKeyDown);
    //     return () => document.removeEventListener("keydown", handleKeyDown);
    // }, [isDrawerOpen, closeDrawer]);

    return (
        <nav className="navigationContainer" role="navigation">

            <a href="http://localhost:3000/">
                <img src={logo} className="logo" alt="Company Logo" />
            </a>

            {/* Mobile Menu Toggle */}
            <button
                className="menuToggle"
                onClick={toggleDrawer}
                aria-expanded={isDrawerOpen}
                aria-label="Toggle navigation"
            >
                ☰
            </button>

            {/* Drawer (Mobile) */}
            {isDrawerOpen && (
                <div
                    className="drawerBackdrop"
                    onClick={handleClickOutside}
                    role="dialog"
                    aria-modal="true"
                >
                    <div className="drawerContainer">
                        <button
                            className="closeDrawerButton"
                            onClick={closeDrawer}
                            aria-label="Close navigation"
                        >
                            ✖
                        </button>
                        <ul className="navLinksContainer">
                            {links.map((item, index) => (
                                <li key={index}>
                                    <NavItem
                                        text={item.text}
                                        hasDropdown={item.hasDropdown}
                                        link={item.link}
                                    />
                                </li>
                            ))}
                        </ul>
                        <div className="authContainer">
                            <button className="loginButton">Log In</button>
                            <button className="signupButton">Sign Up</button>
                        </div>
                    </div>
                </div>
            )}

            {/* Desktop Navigation */}
            <ul className="navLinksContainer desktopNav">
                {links.map((item, index) => (
                    <li key={index}>
                        <NavItem
                            text={item.text}
                            hasDropdown={item.hasDropdown}
                            link={item.link}
                        />
                    </li>
                ))}
            </ul>
            <div className="authContainer desktopNav">
                <button className="loginButton">Log In</button>
                <button className="signupButton">Sign Up</button>
            </div>
        </nav>
    );
};

export default Navigation;
