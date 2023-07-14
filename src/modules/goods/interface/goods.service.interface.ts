import { GoodsHeader } from "../entities/good.entity"

export interface GoodsService {
    goods(): Promise<GoodsHeader[]>
    goodsOne(msNo: string): Promise<GoodsHeader[]>
}