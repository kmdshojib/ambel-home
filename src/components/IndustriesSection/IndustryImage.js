import React from 'react';
export default function IndustryImage({ src, alt }) {
    return (
        <img
            loading="lazy"
            src={src}
            alt={alt}
            className="object-contain shrink-0 self-stretch my-auto rounded-2xl aspect-[0.32] w-[110px]"
        />
    );
}