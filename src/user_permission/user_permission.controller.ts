/* eslint-disable prettier/prettier */
import { UserPermissionService } from "./user_permission.service";
import { Controller,Post, Body, Get} from "@nestjs/common";
import { userPermissionDTO } from "./user_permissionDTO";

@Controller('User_Permission')

export class User_PermissionControler {
    constructor (private readonly userpermisisonService : UserPermissionService){}

    @Get()
    async getUserPermission(){
        return await this.userpermisisonService.getUserPermission()
    }

    @Post()
    async createUserPermission(data: userPermissionDTO){
        return this.userpermisisonService.createUserPermission(data)
    }

}