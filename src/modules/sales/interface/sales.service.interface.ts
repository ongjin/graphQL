import { SalesHD } from "../entities/sales.entity"

export interface SalesService {
    getSales(): Promise<SalesHD[]>
    getSalesPage(current: number, limit: number): Promise<SalesHD[]>
}
