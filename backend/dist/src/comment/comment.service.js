"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const forum_schemas_1 = require("../forum/schemas/forum.schemas");
const reply_schemas_1 = require("../reply/schemas/reply.schemas");
const video_schemas_1 = require("../video/schemas/video.schemas");
const comment_schemas_1 = require("./schemas/comment.schemas");
let CommentService = class CommentService {
    constructor(commentModel, videoModel, replyModel, forumModel) {
        this.commentModel = commentModel;
        this.videoModel = videoModel;
        this.replyModel = replyModel;
        this.forumModel = forumModel;
    }
    async getComment(typeId) {
        return this.commentModel.find({ typeId }).populate('replies', 'title createdBy', 'Reply');
    }
    async addComment(createCommentDto, fullName) {
        let date = new Date();
        let comment = new this.commentModel(Object.assign(Object.assign({}, createCommentDto), { createdAt: date, createdBy: fullName }));
        let video = await this.videoModel.findById(createCommentDto.typeId);
        let forum = await this.forumModel.findById(createCommentDto.typeId);
        if (video) {
            video.comments.push(comment._id);
            video.save();
        }
        else if (forum) {
            forum.comments.push(comment._id);
            forum.save();
        }
        return comment.save();
    }
    async deleteComment(commentId) {
        let comment = await this.commentModel.findById(commentId);
        comment.remove();
        let replies = await this.replyModel.find({ commentId });
        if (replies.length > 0) {
            replies.forEach(reply => reply.remove());
        }
    }
    async updateComment(commentId, title) {
        let comment = await this.commentModel.findById(commentId);
        if (comment) {
            comment.title = title;
            return comment.save();
        }
    }
};
CommentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(comment_schemas_1.Comment.name)),
    __param(1, (0, mongoose_1.InjectModel)(video_schemas_1.Video.name)),
    __param(2, (0, mongoose_1.InjectModel)(reply_schemas_1.Reply.name)),
    __param(3, (0, mongoose_1.InjectModel)(forum_schemas_1.Forum.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model])
], CommentService);
exports.CommentService = CommentService;
//# sourceMappingURL=comment.service.js.map