import { Controller, Get, SetMetadata, Res, Param } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';
import { AppService } from './app.service';
import { EncryptionLibrary } from './shared/common/encryption';
import * as crypto from'crypto'
import { bypassAuth } from './shared';

@Controller()
export class AppController {
    private readonly encryptionLibrary: EncryptionLibrary
    constructor(
        private readonly appService: AppService,
        private jwtService: JwtService,
    ) {
        this.encryptionLibrary = new EncryptionLibrary();
    }

    @Get('/jwt/:param1/:param2/:junction')
    @bypassAuth(true)
    async getHello(
        @Res() res: Response,
        @Param('param1') param1: string,
        @Param('param2') param2: string,
        @Param('junction') junction: string,
    ): Promise<string> {
        console.log("this.encryptionLibrary.encrypt('test')", this.encryptionLibrary.encrypt('test'), param2);
        const roles = ['user', 'admin']
        
        const msNo = this.encryptionLibrary.encrypt(param1)
        const chainNo = this.encryptionLibrary.encrypt(param2)
        const uuid = crypto.randomUUID()

        const jwt = this.jwtService.sign({
            msNo,
            chainNo,
            roles,
            uuid,
            junction
        })

        console.log(jwt);
        
        res.json({jwt: jwt})
        return this.appService.getHello();
    }
}
