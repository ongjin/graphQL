import { Inject, Injectable } from '@nestjs/common';
import { Member } from './entities/member.entity';
import { Repository, createConnection, Connection } from 'typeorm';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';
import { MemberService } from './interface/member.service.interface';

@Injectable()
export class MemberServiceImpl implements MemberService {

    constructor(
        @InjectRepository(Member) private readonly memberRepository: Repository<Member>,
    ) { }

    getMembers(): Promise<Member[]> {
        const result = this.memberRepository.find()
        return result
    }

    getMembersPage(current: number = 1, take: number = 100): Promise<Member[]> {
        const offset = (current - 1) * take;

        return this.memberRepository.find({
            skip: offset,
            take,
        })
    }

    async getMember(msNo: string, chainNo: string): Promise<Member> {
        const member = this.memberRepository.findOneBy({ msNo, chainNo })
        return member || null
    }

}
