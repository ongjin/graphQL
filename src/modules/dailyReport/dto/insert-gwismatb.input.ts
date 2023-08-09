import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { IsNotEmpty, IsEmail, IsEmpty, IsString } from 'class-validator';

@InputType()
export class InsertGwismatb {
    @Field()
    asGropCd: string;
    @Field()
    date: string;
    @Field()
    siSeq: number;
    @Field()
    reqNm: string;
    @Field()
    empNm: string;
    @Field()
    manDay: number
    @Field()
    procFg: string;
    @Field()
    reqContent: string;
    @Field()
    planContent: string;
    @Field()
    userId: string;
    @Field()
    hplCd: string;
    @Field()
    hpmCd: string;
    @Field()
    hpsCd: string;
    @Field()
    workContent: string;
    @Field()
    dSeq: string;
    @Field()
    empNo: string;
    @Field()
    mTenanceYn: string;
    @Field()
    mSrYn: string;
}

