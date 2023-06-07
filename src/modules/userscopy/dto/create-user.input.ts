import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsEmail } from 'class-validator';

@InputType()
export class CreateUserInput {
    @Field()
    @IsNotEmpty()
    USER_NO: number;

    @Field()
    @IsNotEmpty()
    USER_ID: string;

    @Field()
    @IsNotEmpty()
    USER_PW: string;

    @Field()
    @IsNotEmpty()
    USER_NAME: string;

    @Field()
    @IsNotEmpty()
    @IsEmail()
    USER_EMAIL: string;

    @Field()
    @IsNotEmpty()
    USER_PHONE: string;

    @Field()
    @IsNotEmpty()
    USER_JADATE: string;

}
