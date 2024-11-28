import React from 'react';
import ActionButton from '../Buttons/ActionButton';
import searchIcon from "../../../assets/searchIcon.svg";
import herobg from "../../../assets/herobg.png";
import success from "../../../assets/success.png";
import arrowImage from "../../../assets/arrowImage.png"; // Import the arrow image
import HeroBanner from './HeroBanner';

const Hero = () => {
    const actions = [
        {
            text: "Start A Free Trial",
            bgColor: "bg-cyan-900",
            textColor: "text-white"
        },
        {
            text: "Find Professionals",
            bgColor: "bg-orange-500",
            textColor: "text-white",
            icon: searchIcon,
        }
    ];

    return (
        <>
            <section
                className="relative flex flex-col items-center px-4 sm:px-8 lg:px-20 pt-14 pb-36 w-full max-w-[2000px] mx-auto min-h-[534px] max-md:pb-24"
                aria-labelledby="hero-heading"
            >
                <img
                    src={herobg}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover"
                    aria-hidden="true"
                />

                <div className="relative flex flex-col -mb-7 w-full max-w-[90%] xl:max-w-[1078px] max-md:mb-2.5">
                    <div className="flex flex-col justify-center w-full">
                        <h1
                            id="hero-heading"
                            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center leading-tight lg:leading-[72px] text-zinc-800"
                        >
                            Looking for a{" "}
                            <span className="text-red-600">Business Solution </span>
                            <br />
                            <span className="text-red-600">for</span> appointments?
                        </h1>

                        <div className="flex flex-col justify-center items-center mt-7 w-full">
                            <p className="text-center text-gray-500 max-w-[800px] px-4">
                                Ambel simplifies business management by providing tools for
                                scheduling appointments, managing bookkeeping, accepting
                                payments, sharing resources with customers, sending reminders,
                                and running email marketing campaigns.
                            </p>
                        </div>
                    </div>

                    <div className="relative flex flex-row-reverse justify-center items-center mt-7">
                        {/* Buttons and Success Messages */}
                        <div className="flex flex-col items-center gap-5">
                            {/* Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 sm:gap-7 items-center">
                                {actions.map((action, index) => (
                                    <ActionButton
                                        key={index}
                                        text={action.text}
                                        bgColor={action.bgColor}
                                        icon={action.icon}
                                        textColor={action.textColor}
                                        className="px-6 py-3 rounded-md text-sm font-medium shadow-md"
                                    />
                                ))}
                            </div>

                            {/* Success Messages */}
                            <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-emerald-700">
                                {["No credit card required", "Try one month for free"].map(
                                    (text, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center gap-2 py-1 px-3 bg-emerald-50 rounded-full"
                                        >
                                            <img
                                                src={success}
                                                alt=""
                                                className="w-4 aspect-square"
                                                aria-hidden="true"
                                            />
                                            <span>{text}</span>
                                        </div>
                                    )
                                )}
                            </div>
                        </div>

                        {/* Arrow */}
                        <div className="md:flex justify-center hidden">
                            <img
                                src={arrowImage} // Replace with the correct image path
                                alt="Arrow pointing down"
                                className="w-6 sm:w-8" // Adjust arrow size
                            />
                        </div>
                    </div>
                </div>
            </section>
            <HeroBanner />
        </>
    );
};

export default Hero;
