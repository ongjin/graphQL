import { InputType, Field, Int, ObjectType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class UpdateUserInput {
    @Field(() => Int)
    @IsNotEmpty()
    USER_NO: number;

    @Field({ nullable: true })
    USER_ID: string;

    @Field({ nullable: true })
    USER_PW: string;

    @Field({ nullable: true })
    USER_EMAIL: string;

    @Field({ nullable: true })
    USER_PHONE: string;

    @Field({ nullable: true })
    USER_JADATE: Date;

    @Field({ nullable: true })
    USER_NAME: string;
}
