import React from 'react';
import CategoryButton from './CategoryButton';
import BusinessCard from './BusinessCard';
import IndustryImage from './IndustryImage';
import { businesses, categories, images } from '../../constants/industryData';

export default function IndustriesSection() {
    return (
        <section className="flex flex-col items-center rounded-none">
            {/* Header Section */}
            <header className="flex flex-col items-center justify-center px-8 w-full max-w-screen-xl text-center md:px-5 md:max-w-full py-16">
                <div className="flex flex-col items-center text-center w-full max-w-screen-lg">
                    <div className="flex flex-col items-center w-full font-semibold">
                        <h2 className="text-base text-amber-600">Industries</h2>
                        <h3 className="mt-6 text-4xl tracking-tighter leading-tight text-gray-900">
                            Popular Businesses and Practitioners <br /> who use Ambel
                        </h3>
                    </div>
                    <p className="mt-5 text-xl leading-8 text-gray-500 max-w-3xl text-center">
                        Our platform supports a diverse range of professionals, with popular industries including:
                        healthcare providers, medi spas, salons, fitness coaches, law agencies, beauty specialists, consultants, and therapists.
                    </p>
                </div>
            </header>



            {/* Category Buttons */}
            <nav className="flex overflow-hidden flex-wrap gap-1.5 justify-center items-center px-0.5 mt-14 text-base font-semibold leading-none border border-gray-300 border-solid shadow-sm rounded-[29px] text-slate-700 max-md:mt-10 max-md:max-w-full">

                <CategoryButton />
            </nav>

            <section className="w-full max-w-6xl mx-auto mt-6">


                <BusinessCard />

            </section>
        </section>
    );
}
