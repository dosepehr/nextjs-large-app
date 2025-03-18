import React from 'react';

const CourseCardsPlaceholder = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 container gap-6 mt-10'>
            <div className='skeleton w-full h-[35rem]'></div>
            <div className='skeleton w-full h-[35rem]'></div>
            <div className='skeleton w-full h-[35rem]'></div>
            <div className='skeleton w-full h-[35rem]'></div>
        </div>
    );
};

export default CourseCardsPlaceholder;
