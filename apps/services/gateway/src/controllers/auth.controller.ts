import { Controller, Post, Body } from '@nestjs/common'
import { GatewayService } from '../services/gateway.service'

@Controller('auth')
export class AuthController {
  constructor(private readonly gateway: GatewayService) {}

  @Post('login')
  login(@Body() body: any) {
    return this.gateway.forward('http://localhost:4001/auth/login', 'POST', body)
  }
}
