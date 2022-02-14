"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const comment_service_1 = require("../comment/comment.service");
const comment_schemas_1 = require("../comment/schemas/comment.schemas");
const forum_schemas_1 = require("../forum/schemas/forum.schemas");
const reply_schemas_1 = require("../reply/schemas/reply.schemas");
const video_schemas_1 = require("./schemas/video.schemas");
const video_controller_1 = require("./video.controller");
const video_service_1 = require("./video.service");
let VideoModule = class VideoModule {
};
VideoModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: video_schemas_1.Video.name, schema: video_schemas_1.VideoSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: comment_schemas_1.Comment.name, schema: comment_schemas_1.CommentSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: reply_schemas_1.Reply.name, schema: reply_schemas_1.ReplySchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: forum_schemas_1.Forum.name, schema: forum_schemas_1.ForumSchema }])
        ],
        controllers: [video_controller_1.VideoController],
        providers: [video_service_1.VideoService, comment_service_1.CommentService]
    })
], VideoModule);
exports.VideoModule = VideoModule;
//# sourceMappingURL=video.module.js.map