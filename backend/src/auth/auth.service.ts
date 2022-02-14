import { HttpException, Injectable } from '@nestjs/common';
import { UserStatus } from 'src/user/enum/user-status.enum';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt'
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
    constructor(private userService: UserService,
        private jwtService: JwtService
    ) { }
    async validateUser(username: string, pass: string): Promise<any> {
        const user = await this.userService.findOne(username);
        if (user) {
            if (user.status == UserStatus.Pending) {
                throw new HttpException('Pending Account. Please Verify Your Email!', 201)
            }
            const isMatch = await bcrypt.compare(pass, user.password);
            if (isMatch) {
                const { password, ...result } = user;
                return result;
            } else {
                throw new HttpException('Password is incorrect', 201)
            }
        } else {
            throw new HttpException('Username is incorrect!', 201)
        }

    }

    async login(user: any) {
        const payload = user;
        let token = this.jwtService.sign(payload);
        return {
            access_token: this.jwtService.sign(payload),
            user: user._doc
        }
    }

   
}
