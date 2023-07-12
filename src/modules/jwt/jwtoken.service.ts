import { Injectable, Res } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';
import * as fs from 'fs';
import { EncryptionLibrary, END_POINT, END_POINT_URL } from 'src/shared';
import * as crypto from 'crypto'
import { HttpService } from '@nestjs/axios';

@Injectable()
export class JwtokenService {
    constructor(
        private readonly encryptionLibrary: EncryptionLibrary,
        private readonly jwtService: JwtService,
        private readonly httpService: HttpService,
    ) { }
    

    getHtml(path: string, res: Response): Response {
        const html = fs.readFileSync(path, 'utf-8')
        return res.send(html)
    }

    jwtGenerate(formData: Object, res: Response): Response {
        const roles = ['user', 'admin']
        console.log('formData', formData);

        const msNo = this.encryptionLibrary.encrypt(formData['msNo'])
        const chainNo = this.encryptionLibrary.encrypt(formData['chainNo'])
        const junction = formData['junction']
        const uuid = crypto.randomUUID()


        const jwt = this.jwtService.sign({
            msNo,
            chainNo,
            roles,
            uuid,
            junction
        }, {
            expiresIn: '15d',
        })
        console.log(jwt);

        const result: object = {
            Authorization: `Bearer ${jwt}`
        }

        return res.send(result)
    }

    async postTest(res: Response): Promise<void> {
        const headers = {
            'Content-Type': 'application/json',
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtc05vIjoiMnk5N1ZHMnciLCJjaGFpbk5vIjoiMnk5NVZ3PT0iLCJyb2xlcyI6WyJ1c2VyIiwiYWRtaW4iXSwidXVpZCI6IjZmNzM1MmY0LTgyNGQtNGYzNC04YTRhLTEwMGNkOWIyMDU0ZCIsImp1bmN0aW9uIjoic2hpbnN1biIsImlhdCI6MTY4OTAzMzg3OCwiZXhwIjoxNjkwMzI5ODc4fQ.xsGnrbl9DSy_b4MxJUUWm2V_mxQNo--LjtHzJ7Uea0c`,
        };
        const data = {
            query: "{\n  getUser(userNo:1) {\n    userNo\n    userId\n    userPw\n    userEmail\n    userPhone\n   userName\n userJadate\n  tokenTemp{\n      userNo\n      userToken\n    }\n  }\n}\n",
        };

        const resp$ = this.httpService.post(`http://${END_POINT_URL}/${END_POINT}`, data, { headers })
        // const resp$ = this.httpService.post('http://localhost:3030/graphql', data, { headers })
        const resp = await resp$.toPromise()
        console.log('resp', resp.data);

        resp$.subscribe(res => {
            console.log('res', res.data);

        })

        res.send(resp.data)
    }

    getHello(): string {
        return 'Hello World!';
    }

}
