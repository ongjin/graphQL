import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { IsNotEmpty, IsEmail, IsEmpty, IsString } from 'class-validator';

@InputType()
export class UpdateDailyReport {
    @Field()
    asGropCd: string;
    @Field()
    confirmMd: number;
    @Field()
    ctrtMd: number;
    @Field()
    workDate: string;
    @Field()
    empNo: string;
    @Field()
    hpsCd: string;
    @Field()
    hpmCd: string;
    @Field()
    hplCd: string;
    @Field()
    mSupport: string;
    @Field()
    manDay: number;
    @Field()
    planContent: string;
    @Field()
    procRate: number;
    @Field()
    procFg: string;
    @Field()
    reqNm: string;
    @Field()
    reqContent: string;
    @Field()
    seq: string;
    @Field()
    workType: string;
    @Field()
    workContent: string;
    
    // maintenance_data
    // date
    // srData
    // userId

    // @Field({ nullable: true })
    // @IsNotEmpty()
    // userNo: number;
}