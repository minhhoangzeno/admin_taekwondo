import { Body, Controller, Get, Param, Post, Request, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { BlogService } from './blog.service';
import { BlogDto } from './dto/blog-dto.dto';

@Controller('blog')
export class BlogController {
    constructor(private blogService: BlogService) { }


    @Get()
    async getBlogs() {
        return this.blogService.findAll()
    }

    @UseGuards(JwtAuthGuard)
    @Post('create')
    @UseInterceptors(FileInterceptor('file', {
        storage: diskStorage({
            destination: './uploads',
            filename: (req, file, cb) => {
                const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('')
                cb(null, `${randomName}${(file.originalname)}`)
            }
        })
    }))
    async uploadFile(@UploadedFile() file: Express.Multer.File, @Body() body: BlogDto, @Request() req) {
        return this.blogService.createBlog(body, file.filename, req.user._doc.fullName)
    }

    @UseGuards(JwtAuthGuard)
    @Post('remove/:id')
    async removeBlog(@Param('id') id) {
        return this.blogService.deleteById(id)
    }

    @Get('detail/:id')
    async getBlogById(@Param('id') id) {
        return this.blogService.findById(id)
    }

    @UseGuards(JwtAuthGuard)
    @Post('update/:id')
    @UseInterceptors(FileInterceptor('file', {
        storage: diskStorage({
            destination: './uploads',
            filename: (req, file, cb) => {
                const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('')
                cb(null, `${randomName}${(file.originalname)}`)
            }
        })
    }))
    async updateBlog(@UploadedFile() file: Express.Multer.File, @Body() body: BlogDto, @Param('id') id) {
        if (file) {
            return this.blogService.updateById(id, body, file.filename)
        } else {
            return this.blogService.updateById(id, body)
        }
    }

}
