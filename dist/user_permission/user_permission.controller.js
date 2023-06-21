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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserPermissionControler = void 0;
const user_permission_service_1 = require("./user_permission.service");
const common_1 = require("@nestjs/common");
const user_permissionDTO_1 = require("./user_permissionDTO");
let UserPermissionControler = class UserPermissionControler {
    constructor(userpermisisonService) {
        this.userpermisisonService = userpermisisonService;
    }
    async getUserPermission() {
        try {
            return await this.userpermisisonService.getUserPermission();
        }
        catch (error) {
            console.log(error);
        }
    }
    async createUserPermission(data) {
        return await this.userpermisisonService.createUserPermission(data);
    }
};
__decorate([
    (0, common_1.Get)("/find"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserPermissionControler.prototype, "getUserPermission", null);
__decorate([
    (0, common_1.Post)("/create"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_permissionDTO_1.userPermissionDTO]),
    __metadata("design:returntype", Promise)
], UserPermissionControler.prototype, "createUserPermission", null);
UserPermissionControler = __decorate([
    (0, common_1.Controller)("permissao"),
    __metadata("design:paramtypes", [user_permission_service_1.UserPermissionService])
], UserPermissionControler);
exports.UserPermissionControler = UserPermissionControler;
//# sourceMappingURL=user_permission.controller.js.map