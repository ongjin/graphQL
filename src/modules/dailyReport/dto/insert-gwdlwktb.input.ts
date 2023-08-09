import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { IsNotEmpty, IsEmail, IsEmpty, IsString } from 'class-validator';

@InputType()
export class InsertGwdlwktb {
    @Field()
    workDate:string
    @Field()
    empNo: string
    @Field()
    seq: string
    @Field()
    asGropCd: string
    @Field()
    reqNm: string
    @Field()
    reqContent: string
    @Field()
    procFg: string
    @Field()
    procRate: number
    @Field()
    manDay: number
    @Field()
    workContent: string
    @Field()
    planContent: string
    @Field()
    confirmFg: string
    @Field()
    hplCd: string
    @Field()
    hpmCd: string
    @Field()
    hpsCd: string
    @Field()
    userId: string
    @Field()
    workType: string
    @Field()
    confirmMd: number
    @Field()
    mSupport: string
    @Field()
    ctrtMd: number
}

