import { Model } from 'mongoose';
import { CommentService } from 'src/comment/comment.service';
import { ForumDto } from './dto/forum.dto';
import { Forum, ForumDocument } from './schemas/forum.schemas';
export declare class ForumService {
    private forumModel;
    private commentService;
    constructor(forumModel: Model<ForumDocument>, commentService: CommentService);
    findAll(categoryId: string): Promise<(Forum & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    createVideo(createForum: ForumDto, photoURL: string, fullName: string): Promise<Forum>;
    deleteById(id: string): Promise<void>;
    updateById(id: string, forumDto: ForumDto, photoURL?: string): Promise<Forum>;
}
