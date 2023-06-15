import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { IsNotEmpty, IsEmail } from 'class-validator';

@InputType()
export class CreateUserInput {
    @Field({ nullable: true })
    // @IsNotEmpty()
    USER_NO: number;

    @Field({ nullable: true })
    @IsNotEmpty()
    USER_ID: string;

    @Field({ nullable: true })
    @IsNotEmpty()
    USER_PW: string;

    @Field({ nullable: true })
    @IsNotEmpty()
    USER_NAME: string;

    @Field({ nullable: true })
    @IsNotEmpty()
    @IsEmail()
    USER_EMAIL: string;

    @Field({ nullable: true })
    @IsNotEmpty()
    USER_PHONE: string;

    @Field({ nullable: true })
    @IsNotEmpty()
    USER_JADATE: Date;

}
