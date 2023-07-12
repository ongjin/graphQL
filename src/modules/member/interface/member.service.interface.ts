import { Member } from "../entities/member.entity"

export interface MemberService {
    getMembers(dbName: string): Promise<Member[]>
    getMembersPage(dbName: string, current: number, limit: number): Promise<Member[]>
    getMember(dbName: string, msNo: string, chainNo: string): Promise<Member>
}