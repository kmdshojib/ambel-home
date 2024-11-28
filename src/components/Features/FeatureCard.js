import React from 'react';
import './featureCard.css'; // Import the raw CSS file

const FeatureCard = ({ title, description, icon1, icon2 }) => {
    return (
        <article className="feature-card">
            {/* Header with icons */}
            <div className="feature-card-header">
                <img
                    loading="lazy"
                    src={icon1}
                    alt="icon1"
                    className="feature-card-icon"
                />
                <img
                    loading="lazy"
                    src={icon2}
                    alt="icon2"
                    className="feature-card-icon"
                />
            </div>

            {/* Title and description */}
            <div className="feature-card-content">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </article>
    );
};

export default FeatureCard;
