import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Member } from './entities/member.entity';
import { MemberResolver } from './member.resolver';

import { MemberServiceImpl } from './member.service';

@Module({
    imports: [TypeOrmModule.forFeature([Member], 'shinsun'), TypeOrmModule.forFeature([Member])],
    providers: [
        MemberResolver,
        { provide: 'MemberService', useClass: MemberServiceImpl }
    ],
})
export class MemberModule { }

