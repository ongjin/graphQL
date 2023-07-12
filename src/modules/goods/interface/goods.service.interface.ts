import { GoodsHeader } from "../entities/good.entity"

export interface GoodsService {
    findAll(): Promise<GoodsHeader[]>
    findOne(msNo: string): Promise<GoodsHeader[]>
}