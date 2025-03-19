import { Comment } from '@/utils/types/DTOs/comment.interface';
import { ComponentBase } from '@/utils/types/components/component-base.type';

export type CommentProps = Omit<
    ComponentBase,
    'isDisabled' | 'theme' | 'size'
> &
    Comment;
