import React from 'react';

const SocialSection = ({ socialLinks }) => {
    return (
        <section className="social-section">
            <h2>Follow Us</h2>
            <div className="social-icons">
                {socialLinks.map((social, index) => (
                    <img
                        key={index}
                        loading="lazy"
                        src={social.src}
                        alt={social.alt}
                    />
                ))}
            </div>
        </section>
    );
};

export default SocialSection;
