import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { VideoService } from 'src/video/video.service';
import { CategoryVideo, CategoryVideoDocument } from './schemas/category-video.schemas';

@Injectable()
export class CategoryVideoService {
    constructor(@InjectModel(CategoryVideo.name) private categoryVideoModel: Model<CategoryVideoDocument>,
        private videoService: VideoService
    ) { }

    async findAll() {
        return this.categoryVideoModel.find()
    }

    async create(title: string): Promise<CategoryVideo> {
        let categoryVideo = new this.categoryVideoModel({ title });
        return categoryVideo.save();
    }

    async update(title: string, id: string): Promise<CategoryVideo> {
        let categoryVideo = await this.categoryVideoModel.findById(id);
        categoryVideo.title = title;
        return categoryVideo.save();
    }

    async remove(id: string) {
        let categoryVideo = await this.categoryVideoModel.findById(id);
        let videos = await this.videoService.findAll(categoryVideo._id);
        videos.forEach(video => this.videoService.deleteById(video._id.toString()));
        categoryVideo.remove();
    }
}
