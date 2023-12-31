/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/database/prisma.client';
import { userDTO } from './userDTO';


@Injectable()

export class UserService {

    constructor(private prisma: PrismaService) { }

    async getUser() {
        return await this.prisma.user.findMany({
            include: {
                user_permission :true
            }
        })

    }

    async createUser(data: userDTO) {
        const user = await this.prisma.user.create({
            data,
            include: {
                user_permission: true
                }
        })

    }
}