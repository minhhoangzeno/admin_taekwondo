import { Model } from 'mongoose';
import { VideoService } from 'src/video/video.service';
import { CategoryVideo, CategoryVideoDocument } from './schemas/category-video.schemas';
export declare class CategoryVideoService {
    private categoryVideoModel;
    private videoService;
    constructor(categoryVideoModel: Model<CategoryVideoDocument>, videoService: VideoService);
    findAll(): Promise<(CategoryVideo & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    create(title: string): Promise<CategoryVideo>;
    update(title: string, id: string): Promise<CategoryVideo>;
    remove(id: string): Promise<void>;
}
