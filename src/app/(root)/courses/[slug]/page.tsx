import { CourseDetails } from '@/utils/types/DTOs/courseDetails.interface';
import { CourseAside } from './_components/CourseAside';

export async function generateStaticParams() {
    const slugs = await fetch(
        `https://api.classbon.com/api/courses/slugs`
    ).then((res) => res.json());

    return (slugs as string[]).map((slug) => ({
        slug: slug,
    }));
}

async function getCourse(slug: string): Promise<CourseDetails> {
    const res = await fetch(`https://api.classbon.com/api/courses/${slug}`);
    return res.json();
}
const page = async ({ params }: { params: { slug: string } }) => {
    const { slug } = params;
    const course = await getCourse(slug);
    return (
        <div className='container grid grid-cols-10 grid-rows-[1fr_1fr] gap-10 py-10'>
            <div className='bg-primary pointer-events-none absolute right-0 aspect-square w-1/2 rounded-full opacity-10 blur-3xl'></div>
            <div className='col-span-10 xl:col-span-7'>
                <h1 className='text-center xl:text-right text-2xl lg:text-3xl xl:text-4xl font-black leading-10'>
                    {course.title}
                </h1>
                <h2 className='mt-4 text-center xl:text-right text-lg  leading-9'>
                    {course.subTitle}
                </h2>

                <div className='mt-5'>Video Player Component</div>
            </div>
            <div className='col-span-10 xl:col-span-3'>
                <CourseAside {...course} />
            </div>
            <div className='col-span-10 xl:col-span-6 bg-blue-500'>f</div>
            <div className='col-span-10 xl:col-span-4 bg-green-500'>f</div>
        </div>
    );
};

export default page;
