import { UserPermissionService } from "./user_permission.service";
import { userPermissionDTO } from "./user_permissionDTO";
export declare class UserPermissionControler {
    private readonly userpermisisonService;
    constructor(userpermisisonService: UserPermissionService);
    getUserPermission(): Promise<import(".prisma/client").user_permission[]>;
    createUserPermission(data: userPermissionDTO): Promise<void>;
}
