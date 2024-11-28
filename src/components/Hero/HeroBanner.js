import React from 'react';
import bannerImage from "../../../assets/bannerimage.png";
import playButton from "../../../assets/playButton.png";

const HeroBanner = () => {
    return (
        <main className="relative z-10 flex flex-col items-center justify-center px-5 pt-20 pb-40 -mt-7 mx-auto max-w-full rounded-none min-h-[400px] md:min-h-[628px]">
            {/* Background Image */}
            <img
                src={bannerImage}
                alt="Hero Banner"
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Play Button */}
            <img
                src={playButton}
                alt="Play Button"
                className="z-10 w-24 md:w-40 aspect-square object-contain"
            />
        </main>
    );
};

export default HeroBanner;
