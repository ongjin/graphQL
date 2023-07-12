import { Response } from "express"

export interface JwtokenService {
    getHtml(path: string, res: Response): Response
    jwtGenerate(formData: Object, res: Response): Response
    postTest(res: Response): Promise<void> 
    getHello(): string 
}