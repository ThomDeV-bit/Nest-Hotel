/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common'
import { UserControler } from "./user.controller";
import { UserService } from "./user.service";
import { PrismaService } from 'src/database/prisma.client';


@Module({
    controllers : [UserControler],
    providers : [UserService,PrismaService]
})

export class userModule {}