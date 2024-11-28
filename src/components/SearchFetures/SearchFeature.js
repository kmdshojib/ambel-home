import React, { useEffect, useRef, useState } from "react";
import { SearchFeatureCard } from "./SearchFeatureCard";
import { SearchBar } from "./SearchBar";
import { SearchTags } from "./SearchTags";
import BottomTags from "./bottomTags";
import { searchFeatures } from "../../constants/searchFeature";



export default function SearchFeature() {
    const containerRef = useRef(null);
    const cardRefs = useRef([]);
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return;

            if (scrolling) return; // Prevent multiple scroll events from stacking
            setScrolling(true);

            window.requestAnimationFrame(() => {
                const containerTop = containerRef.current.getBoundingClientRect().top;

                cardRefs.current.forEach((card, index) => {
                    if (!card) return;

                    const cardHeight = card.offsetHeight;
                    const marginY = 32;
                    const scrollDistance = containerTop + index * (cardHeight + marginY);

                    if (scrollDistance > -cardHeight) {

                        const scale = Math.max(0.85, 1 - Math.abs(scrollDistance * 0.05) / cardHeight);
                        const translateY = Math.max(0, marginY * index);

                        card.style.transform = `translateY(${translateY}px) scale(${scale})`;
                        card.style.zIndex = "50";
                        card.style.opacity = "1";
                    } else {

                        card.style.transform = `translateY(${marginY * index}px) scale(1)`;
                        card.style.zIndex = "50";
                    }
                });

                setScrolling(false);
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [scrolling]);

    return (
        <div>

            <div className="container mx-auto px-4 py-8">
                {/* Search Bar Section */}
                <div className="search-bar-container bg-white sticky top-0 z-50 rounded-3xl shadow-md p-6 md:p-10">
                    <div className="max-w-4xl mx-auto text-center space-y-6">
                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-slate-700">
                            Find and Book Appointments with Local and International Professionals
                        </h1>
                        <div className="bg-white rounded-3xl p-6 md:p-8">
                            <SearchBar />
                            <div className="mt-6 space-y-4">
                                <h2 className="text-base text-slate-700">Are you looking for</h2>
                                <SearchTags />
                            </div>
                        </div>
                        <p>Explore advance search</p>
                    </div>
                </div>

                {/* Feature Cards Section */}
                <div
                    ref={containerRef}
                    className="relative stack-cards mb-8"
                    style={{ height: `${searchFeatures.length * 80}vh` }}
                >
                    {searchFeatures.map((feature, index) => (
                        <div
                            key={index}
                            ref={(el) => (cardRefs.current[index] = el)}
                            className="stack-cards__item absolute left-0 w-full max-w-4xl mx-auto transition-transform duration-300 mb-20"
                            style={{
                                transformOrigin: "center top",
                            }}
                        >
                            <SearchFeatureCard {...feature} />
                        </div>
                    ))}
                </div>
            </div>
            <div className="my-10 mt-20">
                <BottomTags />
            </div>
        </div>
    );
}

