// const dotenv = require('dotenv');
import * as dotenv from 'dotenv';

const NODE_ENV: string = process.env.NODE_ENV
if(NODE_ENV){
    dotenv.config()
}

const WEBKIOSK_DB_PORT: number = Number(process.env.WEBKIOSK_DB_PORT) || 9070;
const NODE_PORT: number = Number(process.env.NODE_PORT) || 3030 



// author
const AUTHOR: string = process.env.AUTHOR || 'Chnirt'

// application
const PRIMARY_COLOR: string = process.env.PRIMARY_COLOR || '#87e8de'
const DOMAIN: string = process.env.DOMAIN || 'localhost'
const END_POINT: string = process.env.END_POINT || 'graphql'
const VOYAGER: string = process.env.VOYAGER || 'voyager'
const FE_URL: string = process.env.FE_URL || 'xxx'

// static
const STATIC: string = process.env.STATIC || 'static'

// mlab
const MLAB_USER = process.env.MLAB_USER || 'admin'
const MLAB_PASS = process.env.MLAB_PASS || 'chnirt1803'
const MLAB_HOST = process.env.MLAB_HOST || 'cluster0.eoxxs.mongodb.net'
const MLAB_PORT = process.env.MLAB_PORT || 47420
const MLAB_DATABASE = process.env.MLAB_DATABASE || 'nestjs-v7'
const MLAB_URL =
    process.env.MLAB_URL ||
    `mongodbsrv://${MLAB_USER}:${MLAB_PASS}@${MLAB_HOST}/${MLAB_DATABASE}?retryWrites=true&w=majority`

// mongodb
const MONGO_URL: string = process.env.MONGO_PORT ? `mongodb://localhost:${process.env.MONGO_PORT}` : MLAB_URL
const MONGO_DB: string = process.env.MONGO_PORT ? 'nestjs-v7' : MLAB_DATABASE

// typeorm
const enviroment = {
    development: {
        url: MLAB_URL
    },
    testing: {
        url: MLAB_URL
    },
    staging: {
        url: MLAB_URL
        // host: 'localhost',
        // port: MONGO_PORT!,
        // username: '',
        // password: '',
        // database: MONGO_DB!,
    },
    production: {
        url: MLAB_URL
    }
}

// jsonwebtoken
const ISSUER: string = process.env.ISSUER || 'Chnirt corp'
const AUDIENCE: string = process.env.AUDIENCE || 'http://chnirt.github.io'
const ACCESS_TOKEN: string = process.env.ACCESS_TOKEN || 'access-token'
const ACCESS_TOKEN_SECRET: string =
    process.env.ACCESS_TOKEN_SECRET || 'access-token-key'
const REFRESH_TOKEN: string = process.env.REFRESH_TOKEN || 'refresh-token'
const REFRESH_TOKEN_SECRET: string =
    process.env.REFRESH_TOKEN_SECRET || 'refresh-token-key'
const EMAIL_TOKEN: string = process.env.EMAIL_TOKEN || 'email-token'
const EMAIL_TOKEN_SECRET: string =
    process.env.EMAIL_TOKEN_SECRET || 'email-token-key'
const RESETPASS_TOKEN: string = process.env.RESETPASS_TOKEN || 'resetpass-token'
const RESETPASS_TOKEN_SECRET: string =
    process.env.RESETPASS_TOKEN_SECRET || 'resetpass-token-key'

// bcrypt
const BCRYPT_SALT: number = Number(process.env.BCRYPT_SALT) || 10

// nodemailer
const NODEMAILER_USER: string = process.env.NODEMAILER_USER || 'xxx'
const NODEMAILER_PASS: string = process.env.NODEMAILER_PASS || 'xxx'

// cloudinary
const CLOUDINARY_NAME: string = process.env.CLOUDINARY_NAME || 'chnirt'
const CLOUDINARY_API_KEY: string =
    process.env.CLOUDINARY_API_KEY || '475584948229723'
const CLOUDINARY_API_SECRET: string =
    process.env.CLOUDINARY_API_SECRET || 'Duno2be58mE2lCFLcuOssGKG54c'

// pubsub
const NOTIFICATION_SUBSCRIPTION = 'newNotification'
const USER_SUBSCRIPTION = 'newUser'
const MESSAGES_SUBSCRIPTION = 'newMessages'

// passport
const GOOGLE_CLIENT_ID: string = process.env.GOOGLE_CLIENT_ID || 'xxx'
const GOOGLE_CLIENT_SECRET: string = process.env.GOOGLE_CLIENT_SECRET || 'xxx'
const GOOGLE_CALLBACK_URL: string =
    process.env.GOOGLE_CALLBACK_URL || 'auth/google/callback'

const FACEBOOK_APP_ID: string = process.env.FACEBOOK_APP_ID || 'xxx'
const FACEBOOK_APP_SECRET: string = process.env.FACEBOOK_APP_SECRET || 'xxx'
const FACEBOOK_CALLBACK_URL: string =
    process.env.FACEBOOK_CALLBACK_URL || 'auth/facebook/callback'

// google cloud
const GOOGLE_APPLICATION_CREDENTIALS: string =
    process.env.GOOGLE_APPLICATION_CREDENTIALS || 'xxx'

// stripe
const STRIPE_PUBLIC_KEY: string = process.env.STRIPE_PUBLIC_KEY || 'xxx'
const STRIPE_SECRET_KEY: string = process.env.STRIPE_SECRET_KEY || 'xxx'
const STRIPE_PLAN: string = process.env.STRIPE_PLAN || 'xxx'

export {
    AUTHOR,
    PRIMARY_COLOR,
    DOMAIN,
    END_POINT,
    VOYAGER,
    FE_URL,
    STATIC,
    MLAB_USER,
    MLAB_PASS,
    MLAB_HOST,
    MLAB_PORT,
    MLAB_DATABASE,
    MLAB_URL,
    MONGO_URL,
    MONGO_DB,
    ISSUER,
    AUDIENCE,
    ACCESS_TOKEN,
    ACCESS_TOKEN_SECRET,
    REFRESH_TOKEN,
    REFRESH_TOKEN_SECRET,
    RESETPASS_TOKEN,
    RESETPASS_TOKEN_SECRET,
    EMAIL_TOKEN,
    EMAIL_TOKEN_SECRET,
    BCRYPT_SALT,
    NODEMAILER_USER,
    NODEMAILER_PASS,
    CLOUDINARY_NAME,
    CLOUDINARY_API_KEY,
    CLOUDINARY_API_SECRET,
    USER_SUBSCRIPTION,
    NOTIFICATION_SUBSCRIPTION,
    MESSAGES_SUBSCRIPTION,
    GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET,
    GOOGLE_CALLBACK_URL,
    FACEBOOK_APP_ID,
    FACEBOOK_APP_SECRET,
    FACEBOOK_CALLBACK_URL,
    GOOGLE_APPLICATION_CREDENTIALS,
    STRIPE_PUBLIC_KEY,
    STRIPE_SECRET_KEY,
    STRIPE_PLAN,
    WEBKIOSK_DB_PORT,
    NODE_PORT,
}