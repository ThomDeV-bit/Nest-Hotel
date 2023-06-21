"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserPermissionModule = void 0;
const user_permission_controller_1 = require("./user_permission.controller");
const decorators_1 = require("@nestjs/common/decorators");
const prisma_client_1 = require("../database/prisma.client");
const user_permission_service_1 = require("./user_permission.service");
let UserPermissionModule = class UserPermissionModule {
};
UserPermissionModule = __decorate([
    (0, decorators_1.Module)({
        providers: [user_permission_service_1.UserPermissionService, prisma_client_1.PrismaService],
        controllers: [user_permission_controller_1.UserPermissionControler]
    })
], UserPermissionModule);
exports.UserPermissionModule = UserPermissionModule;
//# sourceMappingURL=user_permission.module.js.map