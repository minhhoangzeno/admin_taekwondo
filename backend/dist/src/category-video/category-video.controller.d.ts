import { CategoryVideoService } from './category-video.service';
export declare class CategoryVideoController {
    private categoryVideoService;
    constructor(categoryVideoService: CategoryVideoService);
    findAll(): Promise<(import("./schemas/category-video.schemas").CategoryVideo & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    create(body: any): Promise<import("./schemas/category-video.schemas").CategoryVideo>;
    update(id: any, body: any): Promise<import("./schemas/category-video.schemas").CategoryVideo>;
    remove(id: any): Promise<void>;
}
