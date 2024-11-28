import React from 'react';
import s from "../../../assets/Search.png"
import l from "../../../assets/Location.svg"
export function SearchBar({ onSearch }) {
    return (
        <form className="flex flex-wrap gap-4 items-center w-full max-md:flex-col" onSubmit={(e) => {
            e.preventDefault();
            onSearch();
        }}>
            <div className="flex-1 max-md:w-full">
                <div className="flex items-center bg-white border border-gray-300 rounded-3xl px-4 py-2.5">
                    <img
                        src={s}
                        alt="Search icon"
                        className="w-6 h-6 object-contain mr-3"
                    />
                    <input
                        type="text"
                        placeholder="Search Doctor, Therapist, Consultant, Spa"
                        aria-label="Search professionals"
                        className="flex-1 bg-transparent border-none outline-none text-sm text-gray-400"
                    />
                </div>
            </div>
            <div className="flex-1 max-md:w-full">
                <div className="flex items-center bg-white border border-gray-300 rounded-3xl px-4 py-2.5">
                    <img
                        src={l}
                        alt="Location icon"
                        className="w-4 h-4 object-contain mr-3"
                    />
                    <input
                        type="text"
                        placeholder="Select your location"
                        aria-label="Select location"
                        className="flex-1 bg-transparent border-none outline-none text-sm text-gray-400"
                    />
                </div>
            </div>
            <button
                type="submit"
                className="bg-sky-500 text-white px-5 py-2.5 rounded-3xl hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 text-sm whitespace-nowrap max-md:w-full"
            >
                Search
            </button>
        </form>
    );
}