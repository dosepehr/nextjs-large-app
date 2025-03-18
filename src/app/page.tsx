import { CourseSummary } from '@/utils/types/DTOs/course-summary.interface';
import HomeHero from '../components/home/HomeHero';
import CourseCardList from '@/components/home/CourseCardList';

const Home = async () => {
    const res = await fetch(`https://api.classbon.com/api/courses/newest/4`, {
        next: {
            revalidate: 120,
        },
    });
    const courses: CourseSummary[] = await res.json();
    return (
        <>
            <HomeHero />
            <CourseCardList courses={courses} />
        </>
    );
};

export default Home;
