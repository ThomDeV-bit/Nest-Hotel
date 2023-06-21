/* eslint-disable prettier/prettier */

import { Prisma } from "@prisma/client";

/* eslint-disable prettier/prettier */
export class userPermissionDTO implements Prisma.user_permissionUncheckedCreateInput{
    id_user: number;
    id_permission: number;
    
}
    
