import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CategoryForumService } from './category-forum.service';

@Controller('category-forum')
export class CategoryForumController {
    constructor(private categoryForumService: CategoryForumService) { }

    @Get()
    async findAll() {
        return this.categoryForumService.findAll()
    }

    @Post('create')
    async create(@Body() body) {
        return this.categoryForumService.create(body.title)
    }

    @Post('update/:id')
    async update(@Param('id') id, @Body() body) {
        return this.categoryForumService.update(body.title, id)
    }

    @Post('remove/:id')
    async remove(@Param('id') id) {
        return this.categoryForumService.remove(id)
    }
}
