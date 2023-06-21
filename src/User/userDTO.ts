/* eslint-disable prettier/prettier */
import { Prisma } from "@prisma/client"

/* eslint-disable prettier/prettier */
export class userDTO  implements Prisma.UserCreateInput{
    name : string
    mail: string
    user_permission?: Prisma.user_permissionCreateNestedManyWithoutUserInput;
}
