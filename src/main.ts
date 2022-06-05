import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // cors 也可以传入一个函数来自定义配置，参考：https://github.com/expressjs/cors#configuring-cors-asynchronously
  const app = await NestFactory.create(AppModule, { cors: true });
  await app.listen(process.env.PORT);
  console.log(process.env.PORT);
  console.log(`🚀 Application is running on: ${await app.getUrl()}`);
}
bootstrap();
