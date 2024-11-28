import React from 'react';

const PartnersLogo = ({ src, alt }) => {
    return (
        <img
            src={src}
            alt={alt}
            className="object-contain max-w-[100px] max-h-[50px] w-full h-auto sm:max-w-[120px] sm:max-h-[60px]"
        />
    );
};

export default PartnersLogo;
