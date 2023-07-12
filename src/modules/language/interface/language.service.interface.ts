import { Colangtb, Mlanustb, Mmlangtb } from "../entities/language.entity"

export interface LanguageService {
    findOne(msNo: string): Promise<Mlanustb[]> 
    languagePublicMessage(): Promise<Colangtb[]> 
    languageCCD(msNo: string, langCcd: string): Promise<Mmlangtb[]> 
}