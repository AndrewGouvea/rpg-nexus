import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService) {}

    async createUser(name: string, email: string, password: string) {
        return this.prisma.user.create({
            data: { name, email, password }
        });
    }

    async getAllUsers() {
        return this.prisma.user.findMany();
    }

    async getUserById(id: string) {
        console.log("Buscando usuário com ID:", id); // <-- Log para depuração
    
        const user = await this.prisma.user.findUnique({ where: { id } });
    
        console.log("Usuário encontrado:", user); // <-- Log para ver o que está retornando
        return user;
    }

    async getUserByEmail(email: string) {
        console.log("Buscando usuário com email:", email); // <-- Log para depuração
    
        const user = await this.prisma.user.findUnique({ where: { email } });
    
        console.log("Usuário encontrado:", user); // <-- Log para ver o que está retornando
        return user;
    }

    async deleteUser(id: string) {
        return this.prisma.user.delete({ where: { id } })
    }
}

  
