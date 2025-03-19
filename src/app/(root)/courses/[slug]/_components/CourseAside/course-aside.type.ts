import { CourseDetails } from '@/utils/types/DTOs/courseDetails.interface';


export type CourseAsideProps = Pick<
    CourseDetails,
    | 'basePrice'
    | 'numberOfLectures'
    | 'numOfStudents'
    | 'duration'
    | 'recordStatus'
    | 'isDownloadable'
    | 'averageReviewRating'
    | 'level'
    | 'numOfReviews'
    | 'authorName'
    | 'authorSpecialty'
    | 'profileImageId'
    | 'levelNumber'
>;
