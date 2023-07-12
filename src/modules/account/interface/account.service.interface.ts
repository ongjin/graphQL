import { Account } from "../entities/account.entity";

export interface AccountService {
    getAccounts(): Promise<Account[]>
}