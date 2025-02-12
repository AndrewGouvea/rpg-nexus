import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UsersModule } from './users/users.module';
import { PrismaService } from './prisma.service';

@Module({
  controllers: [AppController],
  imports: [UsersModule],
  providers: [PrismaService],
})
export class AppModule {}
