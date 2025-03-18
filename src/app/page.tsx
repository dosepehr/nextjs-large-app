import { CourseSummary } from '@/utils/types/DTOs/course-summary.interface';
import HomeHero from '../components/home/HomeHero';
import CourseCardList from '@/components/home/CourseCardList';
import FeaturesList from '@/components/home/FeaturesList';
import { homeFeatures } from '@/utils/constants';
import CoursesIntro from '@/components/home/CoursesIntro';

const Home = async () => {
    const res = await fetch(`https://api.classbon.com/api/courses/newest/4`, {
        next: {
            revalidate: 120,
        },
    });
    const newestCourses: CourseSummary[] = await res.json();
    return (
        <>
            <HomeHero />
            <FeaturesList features={homeFeatures} />
            <section className='container  pt-20'>
                <div className='text-center xl:text-right'>
                    <h2 className='text-2xl font-extrabold'>
                        تازه ترین دوره های آموزشی
                    </h2>
                    <p className='mt-3 text-lg'>
                        برای به‌روز موندن، یاد گرفتن نکته‌های تازه ضروری‌ه!
                    </p>
                </div>
                <CourseCardList courses={newestCourses} />
            </section>
            <CoursesIntro />
        </>
    );
};

export default Home;
