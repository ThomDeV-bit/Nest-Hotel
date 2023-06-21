/* eslint-disable prettier/prettier */
import { UserPermissionService } from "./user_permission.service";
import { Controller, Post, Body, Get } from "@nestjs/common";
import { userPermissionDTO } from "./user_permissionDTO";

@Controller("permissao")

export class UserPermissionControler {
    constructor(private readonly userpermisisonService: UserPermissionService) { }

    @Get("/find")
        async getUserPermission() {
            try{

            return await this.userpermisisonService.getUserPermission()
        
    } catch (error) {
        console.log(error)
    }
    
    }

    @Post("/create")
    async createUserPermission(@Body() data: userPermissionDTO) {
        return await this.userpermisisonService.createUserPermission(data)
    }

}