import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { FiltroDeExcecaoHTTP } from './common/filters/filtro-de-excecao-http.filter';

@Module({
  imports: [UserModule],
  controllers: [],
  providers: [
    {
        provide: APP_FILTER,
        useClass: FiltroDeExcecaoHTTP
    },
    {
        provide: APP_INTERCEPTOR,
        useClass: ClassSerializerInterceptor
    }
],
})
export class AppModule {}
