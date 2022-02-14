import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CommentService } from 'src/comment/comment.service';
import { VideoDto } from './dto/video.dto';
import { Video, VideoDocument } from './schemas/video.schemas';

@Injectable()
export class VideoService {
    constructor(@InjectModel(Video.name) private videoModel: Model<VideoDocument>,
        private commentService: CommentService
    ) { }

    async findAll(categoryId: string) {
        return this.videoModel.find({ categoryId }).populate('comments', 'title createdBy', 'Comment')
    }

    async createVideo(createVideo: VideoDto, photoURL: string, fullName: string): Promise<Video> {
        let date = new Date();
        const video = new this.videoModel({ ...createVideo, photoURL, createdAt: date, createdBy: fullName })
        return video.save();
    }

    async deleteById(id: string) {
        let video = await this.videoModel.findById(id);
        let comments = await this.commentService.getComment(video._id);
        comments.forEach(comment => this.commentService.deleteComment(comment._id.toString()))
        video.remove()

    }

    async updateById(id: string, videoDto: VideoDto, photoURL?: string): Promise<Video> {
        let video = await this.videoModel.findById(id.toString())
        if (photoURL) {
            video.videoId = videoDto.videoId;
            video.title = videoDto.title;
            video.metaDescription = videoDto.metaDescription;
            video.content = videoDto.content;
            video.photoURL = photoURL;
            return video.save();
        } else {
            video.videoId = videoDto.videoId;
            video.title = videoDto.title;
            video.metaDescription = videoDto.metaDescription;
            video.content = videoDto.content;
            return video.save();
        }
    }
}
