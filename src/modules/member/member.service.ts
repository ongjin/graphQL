import { Inject, Injectable } from '@nestjs/common';
import { Member } from './member.entity';
import { Repository, createConnection, Connection } from 'typeorm';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';

@Injectable()
export class MemberService {

    constructor(
        @InjectRepository(Member, 'default')
        private readonly memberRepository: Repository<Member>,

    ) { }



    async getMembers(dbName: string): Promise<Member[]> {
        // const connection: Connection = getConnection(dbName)
        // const memberRepository: Repository<Member> = connection.getRepository(Member)
        const result = this.memberRepository.find()
        console.log('result', (await result).length);

        return result
        // const members = await mRepository.find()
        // return members || [] // 빈 배열 반환
    }
    
    async getMembersPage(dbName: string, current: number = 1, limit: number = 100): Promise<Member[]> {
        const offset = (current - 1) * limit;
        // 데이터베이스 쿼리 실행
        const users = await this.memberRepository.find({
            skip: offset,
            take: limit,
            order: { MS_NO: 'ASC' }
        });
        return users;
        // const result = this.memberRepository.find()
        // console.log('result', (await result).length);

        // return result
    }

    async getMember(MS_NO: string, CHAIN_NO: string): Promise<Member> {
        const member = this.memberRepository.findOneBy({ MS_NO, CHAIN_NO })
        return member || null
    }

}
