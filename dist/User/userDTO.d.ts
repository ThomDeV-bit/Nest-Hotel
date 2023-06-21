import { Prisma } from "@prisma/client";
export declare class userDTO implements Prisma.UserCreateInput {
    name: string;
    mail: string;
    user_permission?: Prisma.user_permissionCreateNestedManyWithoutUserInput;
}
