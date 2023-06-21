/* eslint-disable prettier/prettier */
import { UserPermissionControler} from "./user_permission.controller";
import { Module } from "@nestjs/common/decorators";
import { PrismaService } from "src/database/prisma.client";
import { UserPermissionService } from "./user_permission.service";


@Module({
    providers : [UserPermissionService,PrismaService],
    controllers : [UserPermissionControler]
})

export class UserPermissionModule {}