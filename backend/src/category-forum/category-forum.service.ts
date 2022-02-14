import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ForumService } from 'src/forum/forum.service';
import { CategoryForum, CategoryForumDocument } from './schemas/category-forum.schemas';

@Injectable()
export class CategoryForumService {
    constructor(@InjectModel(CategoryForum.name) private categoryForumModel: Model<CategoryForumDocument>,
        private forumService: ForumService
    ) { }

    async findAll() {
        return this.categoryForumModel.find()
    }

    async create(title: string): Promise<CategoryForum> {
        let categoryForum = new this.categoryForumModel({ title });
        return categoryForum.save();
    }

    async update(title: string, id: string): Promise<CategoryForum> {
        let categoryForum = await this.categoryForumModel.findById(id);
        categoryForum.title = title;
        return categoryForum.save();
    }

    async remove(id: string) {
        let categoryForum = await this.categoryForumModel.findById(id);
        let forums = await this.forumService.findAll(categoryForum._id);
        forums.forEach(forum => this.forumService.deleteById(forum._id.toString()));
        categoryForum.remove();
    }
}
