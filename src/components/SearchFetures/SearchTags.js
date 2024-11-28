import React from 'react';
import settings from "../../../assets/settings.png"
import x from "../../../assets/x.png"
const searchTags = [
    { id: 1, label: "Doctor" },
    { id: 2, label: "Lawyer" },
    { id: 3, label: "Therapist" },
    { id: 4, label: "Barber" },
    { id: 5, label: "Spa" },
    { id: 6, label: "Med Spa" },
    { id: 7, label: "Psychiatrist", isHighlighted: true },
    { id: 8, label: "Consultancy firm" },
];

export function SearchTags() {
    return (
        <div className="flex flex-wrap gap-3 items-center w-full max-md:justify-center">
            {searchTags.map((tag) => (
                <button
                    key={tag.id}
                    className={`flex items-center rounded-full px-3 py-1.5 text-sm font-medium ${tag.isHighlighted
                        ? "bg-sky-50 text-sky-700"
                        : "bg-gray-100 text-slate-700"
                        }`}
                >
                    <span>{tag.label}</span>
                    <img
                        src={x}
                        alt=""
                        className="w-4 h-4 object-contain ml-2"
                    />
                </button>
            ))}
            <button className="flex items-center rounded-full px-3 py-1.5 bg-sky-50 text-sky-700 text-sm font-medium">
                More
            </button>
            <button className="flex items-center rounded-full bg-sky-50 p-2 max-md:w-[30px] max-md:h-[30px]">
                <img
                    src={settings}
                    alt="Additional options"
                    className="w-5 h-5 object-contain"
                />
            </button>
        </div>
    );
}