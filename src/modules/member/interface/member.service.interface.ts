import { Member } from "../entities/member.entity"

export interface MemberService {
    getMembers(): Promise<Member[]>
    getMembersPage(current: number, take: number): Promise<Member[]>
    getMember(msNo: string, chainNo: string): Promise<Member>
}