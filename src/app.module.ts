/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { userModule } from './User/user.module';
import { PermissionModule } from './permission/permission.module';
import  {UserPermissionModule} from './user_permission/user_permission.module'

@Module({
  imports: [userModule,PermissionModule,UserPermissionModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
