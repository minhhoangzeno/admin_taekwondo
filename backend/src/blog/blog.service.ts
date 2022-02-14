import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BlogDto } from './dto/blog-dto.dto';
import { Blog, BlogDocument } from './schemas/blog.schemas';

@Injectable()
export class BlogService {
    constructor(@InjectModel(Blog.name) private blogModel: Model<BlogDocument>) { }

    async findAll(): Promise<Blog[]> {
        return this.blogModel.find({}).sort({ createdAt: -1 })
    }

    async createBlog(createBlogDto: BlogDto, photoURL: string, username: string): Promise<Blog> {
        let date = new Date();
        const blog = new this.blogModel({ ...createBlogDto, photoURL, createdAt: date, createdBy: username })
        return blog.save();
    }

    async findById(id: string): Promise<Blog> {
        return await this.blogModel.findById(id)
    }

    async deleteById(id: string) {
        let blog = await this.blogModel.findById(id);
        if(blog){
            blog.remove()
        }
    }

    async updateById(id: string, updateBlogDto: BlogDto, photoURL?: string): Promise<Blog> {
        let blog = await this.blogModel.findById(id.toString())
        if (photoURL) {
            blog.title = updateBlogDto.title;
            blog.metaDescription = updateBlogDto.metaDescription;
            blog.content = updateBlogDto.content;
            blog.photoURL = photoURL;
            return blog.save();
        } else {
            blog.title = updateBlogDto.title;
            blog.metaDescription = updateBlogDto.metaDescription;
            blog.content = updateBlogDto.content;
            return blog.save();
        }

    }

}
