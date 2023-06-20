/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { userModule } from './User/user.module';
import { PermissionModule } from './permission/permission.module';

@Module({
  imports: [userModule,PermissionModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
