import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { IsNotEmpty, IsEmail, IsEmpty, IsString } from 'class-validator';

@InputType()
export class CreateUserInput {
    // @Field({ nullable: true })
    // @IsNotEmpty()
    // userNo: number;

    @Field({ nullable: true })
    @IsNotEmpty()
    userId: string;

    @Field({ nullable: true })
    @IsNotEmpty()
    userPw: string;

    @Field({ nullable: true })
    @IsNotEmpty()
    userName: string;

    @Field({ nullable: true })
    @IsNotEmpty()
    @IsEmail()
    userEmail: string;

    @Field({ nullable: true })
    @IsNotEmpty()
    userPhone: string;

    // @Field({ nullable: true })
    // // @IsNotEmpty()
    // userJadate: Date;

}