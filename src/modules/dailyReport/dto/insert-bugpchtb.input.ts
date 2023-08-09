import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { IsNotEmpty, IsEmail, IsEmpty, IsString } from 'class-validator';

@InputType()
export class InsertBugpchtb {
    @Field()
    bugSeq: string;
    @Field()
    msGroup: string;
    @Field()
    bugName: string;
    @Field()
    createEmpNo: string;
    @Field()
    bugDetail: string;
    @Field()
    remark: string;
    @Field()
    bSeq: string;
}

