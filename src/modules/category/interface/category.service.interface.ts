import { Category } from "../entities/category.entity"

export interface CategoryService {
    categorys(msNo: Array<String>): Promise<Category[]>
}