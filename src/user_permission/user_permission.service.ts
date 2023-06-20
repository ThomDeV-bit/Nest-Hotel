/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/database/prisma.client";
import { userPermissionDTO } from "./user_permissionDTO";

@Injectable()

export class userPermissionService {
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

        const permissionExists = await this.prisma.permission.findFirst({
            where: {
                id : data.id_permission
            }
        })
        if (userExists && permissionExists){
            try {
                const createUserPermission = await this.prisma.user_permission.create({
                    data : {
                        id_permission : permissionExists.id,
                        id_user : userExists.id_user
                    }
                })
            } catch (error) {
                return console.log(error)
            }
        }
        else {
            return console.log('User or Permission invalid')
        }
    }
}