import { PromotionHeader } from "../entities/promotion.entity";

export interface PromotionService {
    findOne(msNo: string): Promise<PromotionHeader[]>
}