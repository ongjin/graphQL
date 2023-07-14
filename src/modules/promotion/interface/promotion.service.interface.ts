import { PromotionHeader } from "../entities/promotion.entity";

export interface PromotionService {
    promotions(): Promise<PromotionHeader[]>
    promotionsOne(msNo: string): Promise<PromotionHeader[]>
}