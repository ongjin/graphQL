import { StoreSystem } from "../entities/store.entity";

export interface StoreService {
  stores(): Promise<StoreSystem[]>
  store(msNo: string): Promise<StoreSystem>
}
