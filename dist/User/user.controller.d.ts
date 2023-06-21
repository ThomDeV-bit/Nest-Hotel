import { userDTO } from "./userDTO";
import { UserService } from "./user.service";
export declare class UserControler {
    private userService;
    constructor(userService: UserService);
    getUsers(): Promise<(import(".prisma/client").User & {
        user_permission: import(".prisma/client").user_permission[];
    })[]>;
    createUser(data: userDTO): Promise<void>;
}
