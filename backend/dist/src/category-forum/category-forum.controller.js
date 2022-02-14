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
exports.CategoryForumController = void 0;
const common_1 = require("@nestjs/common");
const category_forum_service_1 = require("./category-forum.service");
let CategoryForumController = class CategoryForumController {
    constructor(categoryForumService) {
        this.categoryForumService = categoryForumService;
    }
    async findAll() {
        return this.categoryForumService.findAll();
    }
    async create(body) {
        return this.categoryForumService.create(body.title);
    }
    async update(id, body) {
        return this.categoryForumService.update(body.title, id);
    }
    async remove(id) {
        return this.categoryForumService.remove(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CategoryForumController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CategoryForumController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('update/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], CategoryForumController.prototype, "update", null);
__decorate([
    (0, common_1.Post)('remove/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CategoryForumController.prototype, "remove", null);
CategoryForumController = __decorate([
    (0, common_1.Controller)('category-forum'),
    __metadata("design:paramtypes", [category_forum_service_1.CategoryForumService])
], CategoryForumController);
exports.CategoryForumController = CategoryForumController;
//# sourceMappingURL=category-forum.controller.js.map