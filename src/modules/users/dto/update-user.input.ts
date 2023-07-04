import { InputType, Field, Int, ObjectType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class UpdateUserInput {
    @Field(() => Int)
    @IsNotEmpty()
    userNo: number;

    @Field({ nullable: true })
    userId: string;

    @Field({ nullable: true })
    userPw: string;

    @Field({ nullable: true })
    userEmail: string;

    @Field({ nullable: true })
    userPhone: string;

    // @Field({ nullable: true })
    // userJadate: Date;

    @Field({ nullable: true })
    userName: string;
}
