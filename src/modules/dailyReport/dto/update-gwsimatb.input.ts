import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { IsNotEmpty, IsEmail, IsEmpty, IsString } from 'class-validator';

@InputType()
export class UpdateGwsimatb {
    @Field()
    srData: string
    @Field()
    maintenanceData: string
    @Field()
    empNo: string
    @Field()
    dSeq: string
    @Field()
    workContent: string
    @Field()
    hpsCd: string
    @Field()
    hpmCd: string
    @Field()
    hplCd: string
    @Field()
    userId: string
    @Field()
    planContent: string
    @Field()
    reqContent: string
    @Field()
    procFg: string
    @Field()
    manDay: number
    @Field()
    workDate: string
    @Field()
    empNm: string
    @Field()
    reqNm: string
    @Field()
    siSeq: number
    @Field()
    asGropCd: string
}

