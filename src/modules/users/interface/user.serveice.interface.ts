import { Result } from "src/shared";
import { UsersTemp } from "../entities/user.entity";
import { CreateUserInput, UpdateUserInput } from "../dto";

export interface UserService {
    getUsers(): Promise<UsersTemp[]>;
    getUsersPage(current: number, limit: number): Promise<UsersTemp[]>;
    getUser(userNo: number): Promise<UsersTemp>;
    createUser(input: CreateUserInput): Promise<Result>;
    updateUser(input: UpdateUserInput): Promise<Result>;
    deleteUser(userNo: number): Promise<boolean>;
    multiPleDBInsert(accountId: number): Promise<UsersTemp>;
}