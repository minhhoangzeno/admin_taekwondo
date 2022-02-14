import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { BlogModule } from './blog/blog.module';
import { CategoryForumModule } from './category-forum/category-forum.module';
import { CategoryVideoModule } from './category-video/category-video.module';
import { CommentModule } from './comment/comment.module';
import { ForumModule } from './forum/forum.module';
import { ReplyModule } from './reply/reply.module';
import { RolesGuard } from './role/roles.guard';
import { UserModule } from './user/user.module';
import { VideoModule } from './video/video.module';

@Module({
  imports: [UserModule,
    MongooseModule.forRoot('mongodb://localhost/taekwondo'),
    // MongooseModule.forRoot('mongodb+srv://minhhoangzeno:Dalecarnegie@cluster0.lgkmn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'),
    AuthModule,
    BlogModule,
    CategoryVideoModule,
    VideoModule,
    CommentModule,
    ReplyModule,
    ForumModule,
    CategoryForumModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
