import { Comment } from '@/utils/types/DTOs/comment.interface';

export interface CourseCommentList {
    data: Comment[];
    nextPage: number;
}
