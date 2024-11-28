import React from 'react';

const FooterLink = ({ title, links }) => {
    return (
        <nav className="footer-link">
            <div>
                <h2>{title}</h2>
                <div className="divider" />
            </div>
            <ul>
                {links.map((link, index) => (
                    <li key={index}>
                        {link.hasLine ? (
                            <div className="with-line">
                                <div className="vertical-line" />
                                <span>{link.text}</span>
                            </div>
                        ) : (
                            <span>{link.text}</span>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default FooterLink;
