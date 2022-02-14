import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CategoryVideoService } from './category-video.service';

@Controller('category-video')
export class CategoryVideoController {
    constructor(private categoryVideoService: CategoryVideoService) { }

    @Get()
    async findAll() {
        return this.categoryVideoService.findAll()
    }

    @Post('create')
    async create(@Body() body) {
        return this.categoryVideoService.create(body.title)
    }

    @Post('update/:id')
    async update(@Param('id') id, @Body() body) {
        return this.categoryVideoService.update(body.title, id)
    }

    @Post('remove/:id')
    async remove(@Param('id') id) {
        return this.categoryVideoService.remove(id)
    }
}
