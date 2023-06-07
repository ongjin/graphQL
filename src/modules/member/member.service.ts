import { Inject, Injectable } from '@nestjs/common';
import { Member } from './member.entity';
import { Repository, createConnection, Connection } from 'typeorm';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';

@Injectable()
export class MemberService {

    constructor(
        @InjectRepository(Member, 'webkiosk')
        private readonly memberRepository: Repository<Member>,
        
    ) { }
    

    async getMembers(dbName: string): Promise<Member[]> {
        // const connection: Connection = getConnection(dbName)
        // const memberRepository: Repository<Member> = connection.getRepository(Member)

        const members = this.memberRepository.find()
        // const members = await mRepository.find()
        return members || [] // 빈 배열 반환
    }

    async getMember(MS_NO: string, CHAIN_NO: string): Promise<Member> {
        const member = this.memberRepository.findOneBy({ MS_NO, CHAIN_NO })
        return member || null
    }

}
