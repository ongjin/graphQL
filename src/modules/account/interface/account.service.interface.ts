import { Account } from "../entities/account.entity";

export interface AccountService {
    getAccounts(): Promise<Account[]>
    getAccount(id: number): Promise<Account>
    findOneBy(id: number): Promise<Account>
}