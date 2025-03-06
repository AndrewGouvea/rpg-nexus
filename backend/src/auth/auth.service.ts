import { forwardRef, Inject, Injectable, UnauthorizedException } from "@nestjs/common";
import { UsersService } from "../users/users.service";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
    constructor(
        @Inject(forwardRef(() => UsersService))
        private usersService: UsersService,
        private jwtService: JwtService,
    ) {}

    async validateUser(email: string, pass: string): Promise<any> {
        const user = await this.usersService.getUserByEmail(email);
        if(user && user.password === pass) {
            const { password, ...result } = user;
            return result;
        }
        throw new UnauthorizedException('Credenciais Inválidas');
    }

    async login(user: any) {
        const payload = { email: user.email, sub:user.id};
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}