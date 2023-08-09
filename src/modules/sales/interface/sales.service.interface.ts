import { Strnhdtb } from "../entities/sales.entity"

export interface SalesService {
    getSales(): Promise<Strnhdtb[]>
    getSalesPage(current: number, limit: number): Promise<Strnhdtb[]>
}
