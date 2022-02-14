import { Controller, Get, Post, UploadedFile, UseGuards, UseInterceptors, Request, Body, Param } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { VideoDto } from './dto/video.dto';
import { VideoService } from './video.service';

@Controller('video')
export class VideoController {
    constructor(private videoService: VideoService) { }

    @Get(':categoryId')
    async getVideo(@Param('categoryId') categoryId) {
        return this.videoService.findAll(categoryId)
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
    async uploadFile(@UploadedFile() file: Express.Multer.File, @Body() body: VideoDto, @Request() req) {
        return this.videoService.createVideo(body, file.filename, req.user._doc.fullName)
    }

    @UseGuards(JwtAuthGuard)
    @Post('remove/:id')
    async deleteVideo(@Param('id') id) {
        return this.videoService.deleteById(id)
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
    async updateBlog(@UploadedFile() file: Express.Multer.File, @Body() body: VideoDto, @Param('id') id) {
        if (file) {
            return this.videoService.updateById(id, body, file.filename)
        } else {
            return this.videoService.updateById(id, body)
        }
    }

}
