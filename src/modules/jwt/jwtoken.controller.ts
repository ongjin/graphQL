import { Controller, Get, Res, Param, Req, Body, Post } from '@nestjs/common';
import { Request, Response } from 'express';
import { bypassAuth } from 'src/shared';
import { JwtokenService } from './jwtoken.service';

@Controller()
export class JwtokenController {
    constructor(
        private readonly jwtokenService: JwtokenService,
    ) { }

    @Get('/jwt')
    @bypassAuth(true)
    getHtml(@Res() res: Response, @Req() req: Request): void {
        return this.jwtokenService.getHtml('src/views/1.html', res)
    }

    @Post('/jwt')
    @bypassAuth(true)
    jwtGenerate(@Body() formData: object, @Res() res: Response): void {
        return this.jwtokenService.jwtGenerate(formData, res)
    }

    @Get('/test')
    @bypassAuth(true)
    async postTest(@Res() res: Response): Promise<void> {
        return this.jwtokenService.postTest(res)
    }


    // @Get('/jwt/:param1/:param2/:junction')
    // @bypassAuth(true)
    // async getHello(
    //     @Res() res: Response,
    //     @Param('param1') param1: string,
    //     @Param('param2') param2: string,
    //     @Param('junction') junction: string,
    // ): Promise<string> {
    //     console.log("this.encryptionLibrary.encrypt('test')", this.encryptionLibrary.encrypt('test'), param2);
    //     const roles = ['user', 'admin']

    //     const msNo = this.encryptionLibrary.encrypt(param1)
    //     const chainNo = this.encryptionLibrary.encrypt(param2)
    //     const uuid = crypto.randomUUID()

    //     const jwt = this.jwtService.sign({
    //         msNo,
    //         chainNo,
    //         roles,
    //         uuid,
    //         junction
    //     })

    //     console.log(jwt);

    //     res.json({ jwt: jwt })
    //     return this.jwtokenService.getHello();
    // }



}
