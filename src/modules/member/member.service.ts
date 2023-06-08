import { Inject, Injectable } from '@nestjs/common';
import { Member } from './member.entity';
import { Repository, createConnection, Connection } from 'typeorm';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';

@Injectable()
export class MemberService {

    constructor(
        @InjectRepository(Member)
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
            order: { msNo: 'ASC' },
            skip: offset,
            take: limit,
        });
        return users;
        // const result = this.memberRepository.find()
        // console.log('result', (await result).length);

        // return result
    }

    async getMember(msNo: string, chainNo: string): Promise<Member> {
        const member = this.memberRepository.findOneBy({ msNo, chainNo })
        return member || null
    }

}
