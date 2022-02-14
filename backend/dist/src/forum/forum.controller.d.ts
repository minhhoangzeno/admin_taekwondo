/// <reference types="multer" />
/// <reference types="mongoose" />
import { ForumDto } from './dto/forum.dto';
import { ForumService } from './forum.service';
export declare class ForumController {
    private forumService;
    constructor(forumService: ForumService);
    getForum(categoryId: any): Promise<(import("./schemas/forum.schemas").Forum & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    uploadFile(file: Express.Multer.File, body: ForumDto, req: any): Promise<import("./schemas/forum.schemas").Forum>;
    deleteForum(id: any): Promise<void>;
    updateBlog(file: Express.Multer.File, body: ForumDto, id: any): Promise<import("./schemas/forum.schemas").Forum>;
}
