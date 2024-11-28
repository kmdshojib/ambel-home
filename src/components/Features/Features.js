import React from 'react';
import FeatureCard from './FeatureCard';
import { featureData } from '../../constants/featureData';
import "./feature.css"

const Features = () => {
    return (
        <main id="features" className="features-container">
            <section className="features-section">
                {/* Header Section */}
                <header className="features-header">
                    <p style={{ color: "#fdb022" }}>Features</p>
                    <h1>
                        Solve all your needs with a single software solution
                    </h1>
                    <p className="description">
                        This platform streamlines the entire customer management process, saving businesses time and increasing efficiency. Trusted by over 60+ businesses.
                    </p>
                </header>

                {/* Features Grid */}
                <div className="features-grid">
                    {featureData.map((feature, index) => (
                        <FeatureCard key={index} {...feature} />
                    ))}
                </div>
            </section>
        </main>
    );
};

export default Features;
