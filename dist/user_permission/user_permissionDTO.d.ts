import { Prisma } from "@prisma/client";
export declare class userPermissionDTO implements Prisma.user_permissionUncheckedCreateInput {
    id_user: number;
    id_permission: number;
}
