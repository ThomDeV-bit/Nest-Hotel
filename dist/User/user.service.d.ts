import { PrismaService } from 'src/database/prisma.client';
import { userDTO } from './userDTO';
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
    getUser(): Promise<(import(".prisma/client").User & {
        user_permission: import(".prisma/client").user_permission[];
    })[]>;
    createUser(data: userDTO): Promise<void>;
}
