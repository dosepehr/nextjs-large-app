import HomeHero from '../components/home/HomeHero';
import CourseCardList from '@/components/home/CourseCardList';
import FeaturesList from '@/components/home/FeaturesList';
import { homeFeatures, testimonials } from '@/utils/constants';
import CoursesIntro from '@/components/home/CoursesIntro';
import { BlogSummary } from '@/utils/types/DTOs/blog-summary.interface';
import BlogCardList from '@/components/home/BlogCardList';
import { Suspense } from 'react';
import { IconArrowLeftFill } from '@/components/icons';
import Button from '@/components/ui/button';
import CourseCardsPlaceholder from '@/components/ui/placeholders/CourseCardsPlaceholder';
import { TestimonialList } from '@/components/home/TestimonalList';

export const dynamic = 'force-dynamic'; //make page dynamic

const Home = async () => {
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
    const [newestBlogs] = await Promise.all([getNewestBlogs(4)]);
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
                <Suspense fallback={<CourseCardsPlaceholder />}>
                    <CourseCardList />
                </Suspense>
            </section>
            <CoursesIntro />
            <section className='container py-20'>
                <div className='flex flex-col xl:flex-row gap-4 justify-center xl:justify-between items-center'>
                    <div className='text-center xl:text-right'>
                        <h2 className='text-2xl font-extrabold'>
                            تازه‌ترین مقاله‌های آموزشی
                        </h2>
                        <p className='mt-3 text-lg'>
                            به رایگان، به‌روزترین مقاله‌های دنیای تکنولوژی رو در
                            اختیارت می‌ذاریم؛ چون پیشرفتت برامون مهمه!
                        </p>
                    </div>
                    <Button theme='neutral' className='font-semibold'>
                        همه مقاله‌ها
                        <IconArrowLeftFill fill='currentColor' />
                    </Button>
                </div>
                <BlogCardList blogs={newestBlogs} />
            </section>
            <div className='relative mt-32'>
                <div className='bg-primary pointer-events-none absolute bottom-0 left-1/2 aspect-square w-1/2 -translate-x-1/2 rounded-full opacity-5 -top-52 blur-3xl'></div>
                <h2 className='text-info relative z-0 mx-auto text-3xl font-extrabold block w-fit'>
                    <span className='-z-10 w-8 h-8 absolute bg-info opacity-25 -top-2 rounded-full inline-block -right-3'></span>
                    تجربه هم‌میسرهای کلاسبن
                </h2>
                <p className=' mb-32 text-lg text-center mt-2'>
                    تو اینجا تنها نیستی. ببین هم‌مسیرهات نظرشون در مورد دوره‌های
                    کلاسبن چیه
                </p>
                <TestimonialList testimonials={testimonials} />
            </div>
        </>
    );
};

export default Home;
