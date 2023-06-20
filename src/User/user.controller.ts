/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { userDTO } from "./userDTO";
import { UserService } from "./user.service";
import Injectable, { Controller, Get, Post, Body } from '@nestjs/common'

@Controller("User")
export class UserControler {

    constructor(private userService: UserService) { }

    @Get("/find")
    async getUsers() {
        return await this.userService.getUser()
    }


    @Post("/create")
    async createUser(@Body() data: userDTO) {
        return await this.userService.createUser(data)
    }

}