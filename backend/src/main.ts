import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  await app.listen(3000);
}
bootstrap();



// server{
//   listen 80 default_server;
//   root /root/ZoomX/zoomx_front_end/build;
//   server_name zoomxhotels.com www.zoomxhotels.com;
//   index index.html index.htm;
//   location /api{
//     rewrite /api/(.*) /$1 break;
//     proxy_pass http://localhost:1337;
//   }

// }