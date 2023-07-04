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
        private jwtService: JwtService,
        private readonly httpService: HttpService,
    ) { }

    getHtml(path: string, res: Response): Response {
        const html = fs.readFileSync(path, 'utf-8')
        return res.send(html)
    }

    jwtGenerate(formData: object, res: Response): Response {
        const roles = ['user', 'admin']
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
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtc05vIjoiMnk5N1ZHMnciLCJjaGFpbk5vIjoiMnk5NVZ3PT0iLCJyb2xlcyI6WyJ1c2VyIiwiYWRtaW4iXSwidXVpZCI6IjQ4ZmMxYmMzLWM3MDAtNGFkMi05NjYwLWFhMmQ4MmE1YThjZSIsImp1bmN0aW9uIjoic2hpbnN1biIsImlhdCI6MTY4NjYyOTk0NCwiZXhwIjoxNjg5MjIxOTQ0fQ.U_mM9Bh_wXpg6MXZVo5KNIgjq9bdRKLHJRBQuEA7CnU`,
        };
        const data = {
            query: "{\n  getUser(userNo:1) {\n    USER_NO\n    USER_PW\n    USER_NAME\n    USER_ID\n    USER_EMAIL\n    token{\n      USER_TOKEN\n      USER_NO\n    }\n  }\n}\n",
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
