import { Inject, Injectable } from '@nestjs/common';
import { Member } from './member.entity';
import { Repository, createConnection, Connection } from 'typeorm';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';

@Injectable()
export class MemberService {

    constructor(
        @InjectRepository(Member) private readonly memberRepository: Repository<Member>,
        @InjectRepository(Member, 'shinsun') private readonly memberRepository2: Repository<Member>,
    ) { }

    private repoTest(dbName: string) {
        if (dbName === 'shinsun') {
            return this.memberRepository2
        } else if (dbName === 'webkiosk') {
            return this.memberRepository
        }

        return this.memberRepository
    }



    async getMembers(dbName: string): Promise<Member[]> {
        // const connection: Connection = getConnection(dbName)
        // const memberRepository: Repository<Member> = connection.getRepository(Member)
        // console.log('result', (await result).length);
        const repo = this.repoTest(dbName)
        return repo.find()

        const result = this.memberRepository.find()
        return result
        // const members = await mRepository.find()
        // return members || [] // 빈 배열 반환
    }

    async getMembersPage(dbName: string, current: number = 1, limit: number = 100): Promise<Member[]> {
        const offset = (current - 1) * limit;

        const repo = this.repoTest(dbName)
        return repo.find({
            skip: offset,
            take: limit,
        })

        // 데이터베이스 쿼리 실행
        const users = await this.memberRepository.find({
            skip: offset,
            take: limit,
        });
        return users;
        // const result = this.memberRepository.find()
        // console.log('result', (await result).length);

        // return result
    }

    async getMember(dbName: string, msNo: string, chainNo: string): Promise<Member> {
        const repo = this.repoTest(dbName)
        return repo.findOneBy({ msNo, chainNo })

        const member = this.memberRepository.findOneBy({ msNo, chainNo })
        return member || null
    }

}
