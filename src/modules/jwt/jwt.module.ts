import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { JwtService} from '@nestjs/jwt';

@Module({
    imports: [
        JwtModule.register({
            secret: 'SECRET_KEY',
            signOptions: { expiresIn: '24h' }
        })
    ],
    providers: [JwtService]
})
export class JWT_Module { }
