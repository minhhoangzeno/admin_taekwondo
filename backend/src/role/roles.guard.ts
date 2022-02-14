import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Role } from './role.enum';
import { ROLES_KEY } from './roles.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private reflector: Reflector) { }

    canActivate(context: ExecutionContext): boolean {
        const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);
        if (!requiredRoles) {
            return false;
        } else {
            // let user = context.switchToHttp().getRequest().user?._doc;
            

            // return user?.roles?.includes(requiredRoles[0])
            // console.log("a",context.switchToHttp().getRequest().user?._doc)
            // // const { user } = context.switchToHttp().getRequest();
            // const user = {
            //     name: 'Hoang',
            //     roles: [Role.Admin]
            // }
            // console.log(context.switchToHttp().getRequest().user?._doc?.roles)
            return true;
            // return requiredRoles.some((role) => user?.roles?.includes(role));
        }


    }
}