import React from "react";
import arrowDown from "../../../assets/downArrow.svg";

export const NavItem = ({ text, hasDropdown, link = "#" }) => {
    return (
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
};
