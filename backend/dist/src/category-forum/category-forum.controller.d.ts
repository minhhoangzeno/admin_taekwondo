import { CategoryForumService } from './category-forum.service';
export declare class CategoryForumController {
    private categoryForumService;
    constructor(categoryForumService: CategoryForumService);
    findAll(): Promise<(import("./schemas/category-forum.schemas").CategoryForum & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    create(body: any): Promise<import("./schemas/category-forum.schemas").CategoryForum>;
    update(id: any, body: any): Promise<import("./schemas/category-forum.schemas").CategoryForum>;
    remove(id: any): Promise<void>;
}
