import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/users/users.module';
import { AuthenticationService } from './authentication.service';
import { LocalStategy } from './local.strategy';
import { AuthenticationController } from './authentication.controller';

@Module({
  imports: [UsersModule, PassportModule],
  providers: [AuthenticationService, LocalStategy],
  controllers: [AuthenticationController],
})
export class AuthenticationModule {}
