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
exports.ForumService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const comment_service_1 = require("../comment/comment.service");
const forum_schemas_1 = require("./schemas/forum.schemas");
let ForumService = class ForumService {
    constructor(forumModel, commentService) {
        this.forumModel = forumModel;
        this.commentService = commentService;
    }
    async findAll(categoryId) {
        return this.forumModel.find({ categoryId }).populate('comments', 'title createdBy', 'Comment');
    }
    async createVideo(createForum, photoURL, fullName) {
        let date = new Date();
        const forum = new this.forumModel(Object.assign(Object.assign({}, createForum), { photoURL, createdAt: date, createdBy: fullName }));
        return forum.save();
    }
    async deleteById(id) {
        let forum = await this.forumModel.findById(id);
        let comments = await this.commentService.getComment(forum._id);
        comments.forEach(comment => this.commentService.deleteComment(comment._id.toString()));
        forum.remove();
    }
    async updateById(id, forumDto, photoURL) {
        let forum = await this.forumModel.findById(id.toString());
        if (photoURL) {
            forum.title = forumDto.title;
            forum.metaDescription = forumDto.metaDescription;
            forum.content = forumDto.content;
            forum.photoURL = photoURL;
            return forum.save();
        }
        else {
            forum.title = forumDto.title;
            forum.metaDescription = forumDto.metaDescription;
            forum.content = forumDto.content;
            return forum.save();
        }
    }
};
ForumService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(forum_schemas_1.Forum.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        comment_service_1.CommentService])
], ForumService);
exports.ForumService = ForumService;
//# sourceMappingURL=forum.service.js.map