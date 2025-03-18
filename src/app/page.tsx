import { CourseSummary } from '@/utils/types/DTOs/course-summary.interface';
import HomeHero from '../components/home/HomeHero';
import CourseCardList from '@/components/home/CourseCardList';
import FeaturesList from '@/components/home/FeaturesList';
import { homeFeatures } from '@/utils/constants';
import CoursesIntro from '@/components/home/CoursesIntro';
import { BlogSummary } from '@/utils/types/DTOs/blog-summary.interface';
import BlogCardList from '@/components/home/BlogCardList';

const Home = async () => {
    const getNewestCourses = async (
        count: number
    ): Promise<CourseSummary[]> => {
        const coursesRes = await fetch(
            `https://api.classbon.com/api/courses/newest/${count}`,
            {
                next: {
                    revalidate: 120,
                },
            }
        );
        const newestCourses = await coursesRes.json();
        return newestCourses;
    };
    const getNewestBlogs = async (count: number): Promise<BlogSummary[]> => {
        const blogsRes = await fetch(
            `https://api.classbon.com/api/blog/newest/${count}`,
            {
                next: {
                    revalidate: 120,
                },
            }
        );
        const newestBlogs = await blogsRes.json();
        return newestBlogs;
    };
    const [newestCourses, newestBlogs] = await Promise.all([
        getNewestCourses(4),
        getNewestBlogs(4),
    ]);
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
            <BlogCardList blogs={newestBlogs} />
        </>
    );
};

export default Home;
