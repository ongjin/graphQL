import { Category } from "../entities/category.entity"

export interface CategoryService {
    findAll(): Promise<Category[]>
    findWhereAll(msNo: Array<String>): Promise<Category[]>
}