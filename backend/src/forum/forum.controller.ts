import { Body, Controller, Get, Param, Post, Request, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { ForumDto } from './dto/forum.dto';
import { ForumService } from './forum.service';

@Controller('forum')
export class ForumController {
    constructor(private forumService: ForumService) { }

    @Get(':categoryId')
    async getForum(@Param('categoryId') categoryId) {
        return this.forumService.findAll(categoryId)
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
    async uploadFile(@UploadedFile() file: Express.Multer.File, @Body() body: ForumDto, @Request() req) {
        return this.forumService.createVideo(body, file.filename, req.user._doc.fullName)
    }

    @UseGuards(JwtAuthGuard)
    @Post('remove/:id')
    async deleteForum(@Param('id') id) {
        return this.forumService.deleteById(id)
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
    async updateBlog(@UploadedFile() file: Express.Multer.File, @Body() body: ForumDto, @Param('id') id) {
        if (file) {
            return this.forumService.updateById(id, body, file.filename)
        } else {
            return this.forumService.updateById(id, body)
        }
    }

}
