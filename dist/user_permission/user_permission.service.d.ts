import { PrismaService } from "src/database/prisma.client";
import { userPermissionDTO } from "./user_permissionDTO";
export declare class UserPermissionService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getUserPermission(): Promise<import(".prisma/client").user_permission[]>;
    createUserPermission(data: userPermissionDTO): Promise<void>;
}
