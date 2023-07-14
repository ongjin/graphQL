import { Inject, Injectable } from '@nestjs/common';
import { Member } from './entities/member.entity';
import { Repository, createConnection, Connection } from 'typeorm';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';
import { MemberService } from './interface/member.service.interface';

@Injectable()
export class MemberServiceImpl implements MemberService {

    constructor(
        @InjectRepository(Member) private readonly memberRepository: Repository<Member>,
        @InjectRepository(Member, 'shinsun') private readonly memberRepository2: Repository<Member>,
    ) { }

    getMembers(): Promise<Member[]> {
        const result = this.memberRepository.find()
        return result
    }

    getMembersPage(current: number = 1, limit: number = 100): Promise<Member[]> {
        const offset = (current - 1) * limit;

        return this.memberRepository.find({
            skip: offset,
            take: limit,
        })
    }

    async getMember(msNo: string, chainNo: string): Promise<Member> {
        const member = this.memberRepository.findOneBy({ msNo, chainNo })
        return member || null
    }

}
