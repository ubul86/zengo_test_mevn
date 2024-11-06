import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import {ApiResponseInterceptor} from "./interceptors/api-response.interceptor";

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalInterceptors(new ApiResponseInterceptor());

  await app.listen(process.env.NODE_PORT_CONTAINER ?? 3000);
}
bootstrap();
