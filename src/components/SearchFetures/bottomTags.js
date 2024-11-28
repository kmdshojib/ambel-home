import React from 'react';

const Tag = ({ text }) => {
    return (
        <div className="flex items-start self-stretch my-auto text-center whitespace-nowrap bg-blend-multiply">
            <div className="self-stretch px-2 py-1 bg-sky-50 rounded-2xl">{text}</div>
        </div>
    );
}

const BottomTags = () => {
    const tags = [
        'Jane',
        'Calendly',
        'Cal.com',
        'acuity',
        'Square appointment',
        'Simplybook.me',
        'Zenoti',
        'Appointy',
        'Set More',
        'Honey Book',
    ];

    return (
        <div className="flex flex-wrap gap-4 justify-center items-center text-sm font-medium leading-none text-sky-700">
            <div className="self-stretch my-auto text-lg text-gray-900">Replace:</div>
            {tags.map((tag, index) => (
                <Tag key={index} text={tag} />
            ))}
        </div>
    );
}

export default BottomTags;