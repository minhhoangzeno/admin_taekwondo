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
exports.ReplyService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const comment_schemas_1 = require("../comment/schemas/comment.schemas");
const reply_schemas_1 = require("./schemas/reply.schemas");
let ReplyService = class ReplyService {
    constructor(replyModel, commentModel) {
        this.replyModel = replyModel;
        this.commentModel = commentModel;
    }
    async getReply(commentId) {
        return await this.replyModel.find({ commentId });
    }
    async addReply(replyDto, fullName) {
        let date = new Date();
        let reply = await new this.replyModel(Object.assign(Object.assign({}, replyDto), { createdBy: fullName, createdAt: date }));
        let comment = await this.commentModel.findById(replyDto.commentId);
        comment.replies.push(reply._id);
        comment.save();
        return reply.save();
    }
    async deleteReply(id) {
        let reply = await this.replyModel.findById(id);
        return reply.remove();
    }
    async updateReply(id, title) {
        let reply = await this.replyModel.findById(id);
        if (reply) {
            reply.title = title;
            reply.save();
            throw new common_1.HttpException('Success', 200);
        }
    }
};
ReplyService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(reply_schemas_1.Reply.name)),
    __param(1, (0, mongoose_1.InjectModel)(comment_schemas_1.Comment.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], ReplyService);
exports.ReplyService = ReplyService;
//# sourceMappingURL=reply.service.js.map