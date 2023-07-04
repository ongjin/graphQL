import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Result {
    @Field(() => Boolean)
    success: Boolean;

    @Field(() => String, { nullable: true })
    message?: string;

    @Field()
    data?: any
}


