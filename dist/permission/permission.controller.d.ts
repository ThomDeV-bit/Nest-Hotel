import { PermissionService } from "./permission.service";
import { permissionDTO } from "./permissionDTO";
export declare class PermissionController {
    private readonly permissionService;
    constructor(permissionService: PermissionService);
    getPermission(): Promise<import(".prisma/client").permission[]>;
    create(data: permissionDTO): Promise<import(".prisma/client").permission>;
}
