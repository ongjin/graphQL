import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Member } from './member.entity';
import { MemberResolver } from './member.resolver';

import { MemberService } from './member.service';

@Module({
    imports: [TypeOrmModule.forFeature([Member], 'webkiosk'), TypeOrmModule.forFeature([Member])],
    providers: [MemberResolver, MemberService],
})
export class MemberModule { }

