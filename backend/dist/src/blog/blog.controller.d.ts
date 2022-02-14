/// <reference types="multer" />
import { BlogService } from './blog.service';
import { BlogDto } from './dto/blog-dto.dto';
export declare class BlogController {
    private blogService;
    constructor(blogService: BlogService);
    getBlogs(): Promise<import("./schemas/blog.schemas").Blog[]>;
    uploadFile(file: Express.Multer.File, body: BlogDto, req: any): Promise<import("./schemas/blog.schemas").Blog>;
    removeBlog(id: any): Promise<void>;
    getBlogById(id: any): Promise<import("./schemas/blog.schemas").Blog>;
    updateBlog(file: Express.Multer.File, body: BlogDto, id: any): Promise<import("./schemas/blog.schemas").Blog>;
}
