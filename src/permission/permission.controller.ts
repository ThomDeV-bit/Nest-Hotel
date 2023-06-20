/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { PermissionService } from "./permission.service";
import { Injectable, Controller, Get, Post, Body } from "@nestjs/common"
import { permissionDTO } from "./permissionDTO";


@Controller("permission")
export class PermissionController {
    constructor (private readonly permissionService : PermissionService){}
    
    @Get("/find")
    async getPermission() {
        return await this.permissionService.getPermission()
    }

    
    @Post("/create")
    async create(@Body() data: permissionDTO){
        return await this.permissionService.createPermission(data)
    }
}