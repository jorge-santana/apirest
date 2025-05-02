import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { LoggingInterceptor } from './interceptors/logging/logging.interceptor';
import { MaxExecutionTimeInterceptor } from './interceptors/max-execution-time/max-execution-time.interceptor';
import { ResponseUnsafeHeadersRemoverInterceptor } from './interceptors/response-unsafe-headers-remover/response-unsafe-headers-remover.interceptor';
import { AuthGuard } from './guards/auth/auth.guard';
import { ErrorDetailFilter } from './filters/error-detail/error-detail.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalGuards(app.get(AuthGuard));

  app.useGlobalInterceptors(
    new LoggingInterceptor(),
    new MaxExecutionTimeInterceptor(4000),
    new ResponseUnsafeHeadersRemoverInterceptor(),
  );
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  app.useGlobalFilters(new ErrorDetailFilter(true));

  await app.listen(process.env.PORT ?? 3000);
}
void bootstrap();
