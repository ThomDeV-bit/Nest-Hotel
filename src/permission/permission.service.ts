/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { PrismaService } from "src/database/prisma.client";
import { Injectable } from '@nestjs/common'
import { permissionDTO } from "./permissionDTO";


@Injectable()

export class PermissionService {
    constructor(private readonly prisma: PrismaService) { }

    async getPermission() {
        return await this.prisma.permission.findMany()
    }

    async createPermission(data: permissionDTO) {
        const userCreate = await this.prisma.permission.create({
            data: {
                description: data.description
            }
        })
        return userCreate
    }
}