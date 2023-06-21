import { PrismaService } from "src/database/prisma.client";
import { permissionDTO } from "./permissionDTO";
export declare class PermissionService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getPermission(): Promise<import(".prisma/client").permission[]>;
    createPermission(data: permissionDTO): Promise<import(".prisma/client").permission>;
}
