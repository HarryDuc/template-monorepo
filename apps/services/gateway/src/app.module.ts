import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { AuthController } from './controllers/auth.controller';
import { GatewayService } from './services/gateway.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [HttpModule, ConfigModule.forRoot({ isGlobal: true })],
  controllers: [AuthController],
  providers: [GatewayService],
})
export class AppModule {}
