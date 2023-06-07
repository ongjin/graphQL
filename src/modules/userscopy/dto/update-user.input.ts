// update-user.input.ts

import { InputType, Field, Int } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class UpdateUserInput {
    @Field(() => Int)
    @IsNotEmpty()
    USER_NO: number;

    @Field({ nullable: true })
    USER_ID?: string;

    @Field({ nullable: true })
    USER_PW?: string;

    @Field({ nullable: true })
    USER_EMAIL?: string;

    @Field({ nullable: true })
    USER_PHONE?: string;

    @Field({ nullable: true })
    USER_JADATE?: string;

    @Field({ nullable: true })
    USER_NAME?: string;
}
