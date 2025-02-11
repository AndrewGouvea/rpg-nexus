import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getHello() {
    return { message: 'Backend do RPG Nexus está rodando! 🚀' };
  }
}
