/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common'
import { PrismaService } from 'src/database/prisma.client';
import { PermissionService } from './permission.service';
import { PermissionController } from './permission.controller';


@Module ({
    providers:[PermissionService,PrismaService],
    controllers: [PermissionController]
})

export class PermissionModule{}