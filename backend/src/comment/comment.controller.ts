import { Body, Controller, Get, Param, Post, Request, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { CommentService } from './comment.service';
import { CommentDto } from './dto/comment.dto';

@Controller('comment')
export class CommentController {
    constructor(private commentService: CommentService
    ) { }

    @Get(':typeId')
    async getComment(@Param('typeId') typeId: string) {
        return this.commentService.getComment(typeId);
    }

    @UseGuards(JwtAuthGuard)
    @Post('create')
    async createComment(@Body() body: CommentDto, @Request() req) {
        return this.commentService.addComment(body, req.user._doc.fullName)
    }

    @UseGuards(JwtAuthGuard)
    @Post('remove/:id')
    async removeCommentById(@Param('id') id) {
        return this.commentService.deleteComment(id)
    }

    @UseGuards(JwtAuthGuard)
    @Post('update/:id')
    async updateCommentById(@Param('id') id, @Body() body) {
        return this.commentService.updateComment(id, body.title)
    }

}
