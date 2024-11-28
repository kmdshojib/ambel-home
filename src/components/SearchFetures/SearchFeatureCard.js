import * as React from "react";
import link from "../../../assets/link.svg"
export function SearchFeatureCard({
    backgroundColor = "bg-blue-500",
    title,
    description,
    imageSrc,
    imageAlt,
    textColor = "text-white",
}) {
    return (
        <div className={`${backgroundColor} rounded-2xl p-6 md:p-10`}>
            <div className="grid md:grid-cols-2 gap-6 items-center">
                <div className={`${textColor} space-y-4`}>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
                        {title}
                    </h2>
                    <p className="text-sm md:text-base">
                        {description}
                    </p>
                    <div className="flex">

                        <button className="underline text-sm hover:opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2 mr-2">
                            Learn more
                        </button>
                        <img
                        src={link}
                        alt={"link"}
                    />
                    </div>
                </div>
                <div>
                    <img
                        src={imageSrc}
                        alt={imageAlt}
                        className="w-full rounded-xl aspect-video object-cover"
                    />
                </div>
            </div>
        </div>
    );
}