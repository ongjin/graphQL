import { StoreSystem } from "../entities/store.entity";

export interface StoreService {
  findAll(): Promise<StoreSystem[]>
  findOne(msNo: string): Promise<StoreSystem>
}
