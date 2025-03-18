import { CourseDetails } from '@/utils/types/DTOs/courseDetails.interface';

export async function generateStaticParams() {
    const slugs = await fetch(`https://api.classbon.com/api/courses/slugs`).then(
        (res) => res.json()
    );

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
    const courseData = await getCourse(slug);
    return (
        <div className='text-5xl flex justify-center items-center w-full'>
            <h1>{courseData.title}</h1>
        </div>
    );
};

export default page;
