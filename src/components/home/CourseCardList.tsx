import { CourseSummary } from '@/utils/types/DTOs/course-summary.interface';
import React from 'react';
import CourseCard from './CourseCard';

const getNewestCourses = async (count: number): Promise<CourseSummary[]> => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const coursesRes = await fetch(
        `https://api.classbon.com/api/courses/newest/${count}`,
        {
            // cache: 'no-store', //make page dynamic
            next: {
                revalidate: 120,
                // 0 make page dynamic
            },
        }
    );
    const newestCourses = await coursesRes.json();
    return newestCourses;
};
const CourseCardList = async () => {
    const courses = await getNewestCourses(4);
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 container gap-6 mt-10'>
            {courses.map((course) => (
                <CourseCard key={`course-${course.slug}`} {...course} />
            ))}
        </div>
    );
};

export default CourseCardList;
