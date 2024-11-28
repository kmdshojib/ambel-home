import React from 'react';

const ActionButton = ({ text, bgColor, icon, textColor }) => {
    return (
        <button
            className={`flex gap-2.5 justify-center items-center px-4 py-2 ${bgColor} rounded-lg hover:scale-105 hover:shadow-lg active:scale-95 transition-all duration-300 ease-in-out w-full sm:w-auto ${textColor}`}
            aria-label={text}
        >
            {icon && (
                <img
                    src={icon}
                    alt=""
                    className="object-contain shrink-0 w-6 aspect-square"
                    aria-hidden="true"
                />
            )}
            <span className="whitespace-nowrap">{text}</span>
        </button>
    );
};

export default ActionButton;
