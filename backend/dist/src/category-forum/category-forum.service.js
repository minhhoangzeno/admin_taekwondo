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
exports.CategoryForumService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const forum_service_1 = require("../forum/forum.service");
const category_forum_schemas_1 = require("./schemas/category-forum.schemas");
let CategoryForumService = class CategoryForumService {
    constructor(categoryForumModel, forumService) {
        this.categoryForumModel = categoryForumModel;
        this.forumService = forumService;
    }
    async findAll() {
        return this.categoryForumModel.find();
    }
    async create(title) {
        let categoryForum = new this.categoryForumModel({ title });
        return categoryForum.save();
    }
    async update(title, id) {
        let categoryForum = await this.categoryForumModel.findById(id);
        categoryForum.title = title;
        return categoryForum.save();
    }
    async remove(id) {
        let categoryForum = await this.categoryForumModel.findById(id);
        let forums = await this.forumService.findAll(categoryForum._id);
        forums.forEach(forum => this.forumService.deleteById(forum._id.toString()));
        categoryForum.remove();
    }
};
CategoryForumService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(category_forum_schemas_1.CategoryForum.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        forum_service_1.ForumService])
], CategoryForumService);
exports.CategoryForumService = CategoryForumService;
//# sourceMappingURL=category-forum.service.js.map