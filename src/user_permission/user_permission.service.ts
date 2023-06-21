/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/adjacent-overload-signatures */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/database/prisma.client";
import { userPermissionDTO } from "./user_permissionDTO";

@Injectable()

export class UserPermissionService {
    constructor(private readonly prisma: PrismaService) { }
    async getUserPermission() {
        return await this.prisma.user_permission.findMany()
    }


    async createUserPermission(data: userPermissionDTO) {
        const userExists = await this.prisma.user.findUnique({
            where: {
                id_user: data.id_user
            }
        })

    
        if (userExists) {
            try {
                const createUserPermission = await this.prisma.user_permission.create({
                    data: {
                        id_permission: data.id_permission,
                        id_user: userExists.id_user
                    }
                })
            } catch (error) {
                 throw new error
            }
        }
        else {
            return console.log('User or Permission invalid')
        }
    }
}