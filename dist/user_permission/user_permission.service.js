"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserPermissionService = void 0;
const common_1 = require("@nestjs/common");
const prisma_client_1 = require("../database/prisma.client");
let UserPermissionService = class UserPermissionService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getUserPermission() {
        return await this.prisma.user_permission.findMany();
    }
    async createUserPermission(data) {
        const userExists = await this.prisma.user.findUnique({
            where: {
                id_user: data.id_user
            }
        });
        if (userExists) {
            try {
                const createUserPermission = await this.prisma.user_permission.create({
                    data: {
                        id_permission: data.id_permission,
                        id_user: userExists.id_user
                    }
                });
            }
            catch (error) {
                throw new error;
            }
        }
        else {
            return console.log('User or Permission invalid');
        }
    }
};
UserPermissionService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_client_1.PrismaService])
], UserPermissionService);
exports.UserPermissionService = UserPermissionService;
//# sourceMappingURL=user_permission.service.js.map