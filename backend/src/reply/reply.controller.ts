import { Body, Controller, Get, Param, Post, UseGuards, Request } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { ReplyDto } from './dto/reply.dto';
import { ReplyService } from './reply.service';

@Controller('reply')
export class ReplyController {
    constructor(private replyService: ReplyService) { }
    @Get(':commentId')
    async getReplyByCommentId(@Param('commentId') commentId) {
        return this.replyService.getReply(commentId)
    }

    @UseGuards(JwtAuthGuard)
    @Post('create')
    async addReplyCommentId(@Body() body: ReplyDto, @Request() req) {
        return this.replyService.addReply(body, req.user._doc.fullName)
    }

    @UseGuards(JwtAuthGuard)
    @Post('remove/:id')
    async removeReplyById(@Param('id') id) {
        return this.replyService.deleteReply(id)
    }

    @UseGuards(JwtAuthGuard)
    @Post('update/:id')
    async updateReplyById(@Param('id') id, @Body() body) {
        return this.replyService.updateReply(id, body.title)
    }

}
