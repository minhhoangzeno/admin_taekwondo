import { Model } from 'mongoose';
import { ForumService } from 'src/forum/forum.service';
import { CategoryForum, CategoryForumDocument } from './schemas/category-forum.schemas';
export declare class CategoryForumService {
    private categoryForumModel;
    private forumService;
    constructor(categoryForumModel: Model<CategoryForumDocument>, forumService: ForumService);
    findAll(): Promise<(CategoryForum & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    create(title: string): Promise<CategoryForum>;
    update(title: string, id: string): Promise<CategoryForum>;
    remove(id: string): Promise<void>;
}
