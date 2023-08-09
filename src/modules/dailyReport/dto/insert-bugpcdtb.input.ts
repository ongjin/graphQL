import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { IsNotEmpty, IsEmail, IsEmpty, IsString } from 'class-validator';

@InputType()
export class InsertBugpcdtb {
    @Field()
    bugSeq: string;
    @Field()
    slipNo: string;
    @Field()
    empNo: string;
}


