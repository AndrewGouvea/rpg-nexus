import { Controller, Get, Post, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post()
    createUser(@Body() body: { name: string; email: string; password: string }) {
        return this.usersService.createUser(body.name, body.email, body.password);
    }

    @UseGuards(JwtAuthGuard) // Rota protegida
    @Get()
    getAllUsers() {
        return this.usersService.getAllUsers();
    }

    @Get(':id')
    getUserById(@Param('id') id: string) {
        return this.usersService.getUserById(id);
    }

    @Delete(':id')
    deleteUser(@Param('id') id: string) {
        return this.usersService.deleteUser(id);
    }
}
