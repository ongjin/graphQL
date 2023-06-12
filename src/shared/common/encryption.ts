import * as crypto from 'crypto';
import * as bcrypt from 'bcrypt';
import {
    ENCRYPT_ALGORITHM,
    BCRYPT_SALT,
    ENCRYPT_IV,
    ENCRYPT_KEY
} from '../environments';

export class EncryptionLibrary {
    private readonly algorithm: string;
    private readonly key: string;
    private readonly iv: string;
    private readonly saltRounds: number;

    constructor() {
        this.algorithm = ENCRYPT_ALGORITHM; // 암호화 알고리즘 설정
        this.key = ENCRYPT_KEY; // 키
        this.iv = ENCRYPT_IV; // 초기화 벡터 값
        this.saltRounds = BCRYPT_SALT; // bcrypt salt rounds 설정
    }

    encrypt(data: string): string {
        // const key = crypto.randomBytes(32); // 32바이트(256비트) 키 생성
        // const iv = crypto.randomBytes(16); // 16바이트(128비트) IV 생성
        // console.log('key', key.toString('hex'), iv.toString('hex'));
        // key <Buffer 0f cc fe 1a d3 bb key <Buffer 0f cc fe 1a d3 bb 76 b3 f2 d2 37 11 5b 71 90 da 24 d4 70 82 bf 37 19 28 d7 33 26 53 80 5d f4 30> <Buffer 3b 13 ec 90 cc 75 14 2d 27 47 a5 fc 09 71 95 3d>
        // encryptResult 7avAFtnoEIfXVk+kG71LGQ==

        const cipher = crypto.createCipheriv(this.algorithm, Buffer.from(this.key, 'hex'), Buffer.from(this.iv, 'hex'));
        let encryptedData = cipher.update(data, 'utf8', 'base64');
        encryptedData += cipher.final('base64');
        return encryptedData;
    }

    decrypt(encryptedData: string): string {
        // const key = crypto.randomBytes(32); // 32바이트(256비트) 키 생성
        // const iv = crypto.randomBytes(16); // 16바이트(128비트) IV 생성
        // const decipher = crypto.createDecipheriv(this.algorithm, key, iv);
        const decipher = crypto.createDecipheriv(this.algorithm, Buffer.from(this.key, 'hex'), Buffer.from(this.iv, 'hex'));
        let decryptedData = decipher.update(encryptedData, 'base64', 'utf8');
        decryptedData += decipher.final('utf8');
        return decryptedData;
    }

    async hashPassword(password: string): Promise<string> {
        const salt = await bcrypt.genSalt(this.saltRounds);
        const hashedPassword = await bcrypt.hash(password, salt);
        return hashedPassword;
    }

    async comparePasswords(password: string, hashedPassword: string): Promise<boolean> {
        return bcrypt.compare(password, hashedPassword);
    }
}
