import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CommentService } from 'src/comment/comment.service';
import { ForumDto } from './dto/forum.dto';
import { Forum, ForumDocument } from './schemas/forum.schemas';


@Injectable()
export class ForumService {
    constructor(@InjectModel(Forum.name) private forumModel: Model<ForumDocument>,
        private commentService: CommentService
    ) { }

    async findAll(categoryId: string) {
        return this.forumModel.find({ categoryId }).populate('comments', 'title createdBy', 'Comment')
    }

    async createVideo(createForum: ForumDto, photoURL: string, fullName: string): Promise<Forum> {
        let date = new Date();
        const forum = new this.forumModel({ ...createForum, photoURL, createdAt: date, createdBy: fullName })
        return forum.save();
    }

    async deleteById(id: string) {
        let forum = await this.forumModel.findById(id);
        let comments = await this.commentService.getComment(forum._id);
        comments.forEach(comment => this.commentService.deleteComment(comment._id.toString()))
        forum.remove()

    }

    async updateById(id: string, forumDto: ForumDto, photoURL?: string): Promise<Forum> {
        let forum = await this.forumModel.findById(id.toString())
        if (photoURL) {
            forum.title = forumDto.title;
            forum.metaDescription = forumDto.metaDescription;
            forum.content = forumDto.content;
            forum.photoURL = photoURL;
            return forum.save();
        } else {
            forum.title = forumDto.title;
            forum.metaDescription = forumDto.metaDescription;
            forum.content = forumDto.content;
            return forum.save();
        }
    }
}
