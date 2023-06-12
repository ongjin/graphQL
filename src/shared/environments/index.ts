/**
 * @description environments
 * @description 환경변수 설정
 */
import * as dotenv from 'dotenv';

const NODE_ENV: string = process.env.NODE_ENV
if (NODE_ENV) {
    dotenv.config()
}

// node port
const NODE_PORT: number = Number(process.env.NODE_PORT) || 3030

// db connection
const DB_TYPE: string = process.env.DB_TYPE || 'oracle'

const WEBKIOSK_DB_PORT: number = Number(process.env.WEBKIOSK_DB_PORT) || 9070;
const WEBKIOSK_DB_NAME: string = process.env.WEBKIOSK_DB_NAME || "default"
const WEBKIOSK_DB_HOST: string = process.env.WEBKIOSK_DB_HOST || `140.238.21.87:${WEBKIOSK_DB_PORT}`
const WEBKIOSK_DB_SID: string = process.env.WEBKIOSK_DB_SID || 'xe'
const WEBKIOSK_DB_USERNAME: string = process.env.WEBKIOSK_DB_USERNAME || 'neoib'
const WEBKIOSK_DB_PASSWORD: string = process.env.WEBKIOSK_DB_PASSWORD || 'neoib0'

const SHINSUN_DB_PORT: number = Number(process.env.SHINSUN_DB_PORT) || 9090;
const SHINSUN_DB_NAME: string = process.env.SHINSUN_DB_NAME || "shinsun"
const SHINSUN_DB_HOST: string = process.env.SHINSUN_DB_HOST || `140.238.21.87:${SHINSUN_DB_PORT}`
const SHINSUN_DB_SID: string = process.env.SHINSUN_DB_SID || 'xe'
const SHINSUN_DB_USERNAME: string = process.env.SHINSUN_DB_USERNAME || 'neoib'
const SHINSUN_DB_PASSWORD: string = process.env.SHINSUN_DB_PASSWORD || 'neoib0'

// author
const AUTHOR: string = process.env.AUTHOR || 'CJY'

// roles
const ROLES_KEY = process.env.ROLES_KEY || 'roles';

// jsonwebtoken
const JWT_SECRET_KEY: string = process.env.JWT_SECRET_KEY || 'SECRET_KEY'

// crypt
const BCRYPT_SALT: number = Number(process.env.BCRYPT_SALT) || 10
const ENCRYPT_KEY: string = process.env.ENCRYPT_KEY || 'e989f80ea242b24bb7f4aa279c474ad19313373e14c1101f4aae76ead13df459'
const ENCRYPT_IV: string = process.env.ENCRYPT_IV || 'cc8147785624522ec87e1e34ab7a7be1'
const ENCRYPT_ALGORITHM: string = process.env.ENCRYPT_ALGORITHM || 'aes-256-ctr'

// application
const PRIMARY_COLOR: string = process.env.PRIMARY_COLOR || '#87e8de'
const DOMAIN: string = process.env.DOMAIN || 'localhost'
const END_POINT: string = process.env.END_POINT || 'graphql'
const VOYAGER: string = process.env.VOYAGER || 'voyager'
const FE_URL: string = process.env.FE_URL || 'xxx'



export {
    // node port
    NODE_PORT,

    // db connection
    DB_TYPE,

    WEBKIOSK_DB_PORT,
    WEBKIOSK_DB_NAME,
    WEBKIOSK_DB_HOST,
    WEBKIOSK_DB_SID,
    WEBKIOSK_DB_USERNAME,
    WEBKIOSK_DB_PASSWORD,

    SHINSUN_DB_PORT,
    SHINSUN_DB_NAME,
    SHINSUN_DB_HOST,
    SHINSUN_DB_SID,
    SHINSUN_DB_USERNAME,
    SHINSUN_DB_PASSWORD,

    // author
    AUTHOR,

    // roles
    ROLES_KEY,

    // jsonwebtoken
    JWT_SECRET_KEY,

    // bcrypt
    BCRYPT_SALT,
    ENCRYPT_KEY,
    ENCRYPT_IV,
    ENCRYPT_ALGORITHM,



    PRIMARY_COLOR,
    DOMAIN,
    END_POINT,
    VOYAGER,
    FE_URL,
}