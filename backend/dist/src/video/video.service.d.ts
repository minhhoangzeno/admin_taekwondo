import { Model } from 'mongoose';
import { CommentService } from 'src/comment/comment.service';
import { VideoDto } from './dto/video.dto';
import { Video, VideoDocument } from './schemas/video.schemas';
export declare class VideoService {
    private videoModel;
    private commentService;
    constructor(videoModel: Model<VideoDocument>, commentService: CommentService);
    findAll(categoryId: string): Promise<(Video & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    createVideo(createVideo: VideoDto, photoURL: string, fullName: string): Promise<Video>;
    deleteById(id: string): Promise<void>;
    updateById(id: string, videoDto: VideoDto, photoURL?: string): Promise<Video>;
}
