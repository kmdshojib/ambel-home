import React from 'react';
import PartnersLogo from './PartnersLogo';
import { partnerLogos } from './../../constants/partners';

const BrandPartners = () => {
    return (
        <section className="text-center pb-[70px] bg-[#FAFAFA] flex flex-col items-center">
            <p className="text-lg font-medium text-gray-600 pt-4 px-4 sm:px-6 md:px-8">
                Join 10k+ Users, 35+ Solo Practitioners and 60+ Businesses all over the World
            </p>
            <div className="flex overflow-hidden mt-[60px] group">
                <div className="flex items-center justify-center space-x-10 sm:space-x-12 md:space-x-16 animate-loop-scroll group-hover:paused min-w-full">
                    {partnerLogos.map((logo) => (
                        <div key={logo.id} className="flex-shrink-0 flex items-center justify-center">
                            <PartnersLogo src={logo.src} alt={logo.alt} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BrandPartners;
