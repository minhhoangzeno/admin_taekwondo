/// <reference types="multer" />
/// <reference types="mongoose" />
import { VideoDto } from './dto/video.dto';
import { VideoService } from './video.service';
export declare class VideoController {
    private videoService;
    constructor(videoService: VideoService);
    getVideo(categoryId: any): Promise<(import("./schemas/video.schemas").Video & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    uploadFile(file: Express.Multer.File, body: VideoDto, req: any): Promise<import("./schemas/video.schemas").Video>;
    deleteVideo(id: any): Promise<void>;
    updateBlog(file: Express.Multer.File, body: VideoDto, id: any): Promise<import("./schemas/video.schemas").Video>;
}
