import * as React from "react";

const tabData = [
    { id: 1, label: "Doctor", isActive: true },
    { id: 2, label: "Lawyer", isActive: false },
    { id: 3, label: "Spa & Salon", isActive: false },
    { id: 4, label: "Therapist", isActive: false },
    { id: 5, label: "Fitness", isActive: false },
    { id: 6, label: "Instructor", isActive: false },
    { id: 7, label: "Consultancy", isActive: false },
];

function NavigationTab({ label, isActive }) {
    return (
        <button
            className={`gap-2 self-stretch px-6 py-2.5 my-auto whitespace-nowrap max-md:px-5 
                transition-all duration-300 ease-in-out 
                ${isActive
                    ? 'bg-[#19525A] text-white rounded-[45px] py-2 shadow-lg'
                    : 'bg-white hover:bg-[#19525A] hover:text-white hover:rounded-[45px] hover:shadow-lg'
                }
            `}
            role="tab"
            aria-selected={isActive}
            tabIndex={isActive ? 0 : -1}
        >
            {label}
        </button>
    );
}

function CategoryButton() {
    return (
        <nav
            className="flex overflow-hidden flex-wrap gap-1.5 justify-center items-center text-base font-semibold leading-none 
            border border-gray-300 border-solid shadow-sm rounded-[29px] text-slate-700"
            role="tablist"
            aria-label="Navigation categories"
        >
            {tabData.map((tab) => (
                <NavigationTab
                    key={tab.id}
                    label={tab.label}
                    isActive={tab.isActive}
                />
            ))}
        </nav>
    );
}

export default CategoryButton;
