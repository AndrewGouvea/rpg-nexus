import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UsersModule } from './users/users.module';
import { PrismaService } from './prisma.service';
import { AuthModule } from './auth/auth.module';

@Module({
  controllers: [AppController],
  imports: [UsersModule, AuthModule],
  providers: [PrismaService],
})
export class AppModule {}
