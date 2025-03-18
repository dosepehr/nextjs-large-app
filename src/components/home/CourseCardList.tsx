import { CourseSummary } from '@/utils/types/DTOs/course-summary.interface';
import React, { FC } from 'react';
import CourseCard from './CourseCard';

type CourseCardListProps = {
    courses: CourseSummary[];
};

const CourseCardList: FC<CourseCardListProps> = ({ courses }) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 container gap-6 mt-10'>
            {courses.map((course) => (
                <CourseCard key={`course-${course.slug}`} {...course} />
            ))}
        </div>
    );
};

export default CourseCardList;
