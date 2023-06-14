import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EncryptionLibrary, JWT_SECRET_KEY } from 'src/shared';
import { JwtokenController } from './jwtoken.controller';
import { JwtokenService } from './jwtoken.service';

@Module({
    // imports: [TypeOrmModule.forFeature([Member], 'shinsun'), TypeOrmModule.forFeature([Member])],
    imports: [
        JwtModule.register({
            secret: JWT_SECRET_KEY,
            signOptions: { expiresIn: '30d' },
        }),
        HttpModule
    ],
    controllers: [JwtokenController],
    providers: [
        JwtokenService,
        EncryptionLibrary
    ],
})
export class JwtokenModule { }

