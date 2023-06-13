import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtokenController } from './jwtoken.controller';
import { JwtokenService } from './jwtoken.service';

@Module({
    // imports: [TypeOrmModule.forFeature([Member], 'shinsun'), TypeOrmModule.forFeature([Member])],
    controllers: [JwtokenController],
    providers: [JwtokenService],
})
export class JwtokenModule { }

