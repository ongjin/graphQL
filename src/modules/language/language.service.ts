import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Colangtb, Langmstb, Mlanustb, Mmlangtb } from './entities/language.entity';
import { LanguageService } from './interface/language.service.interface';

@Injectable()
export class LanguageServiceImpl implements LanguageService {
    constructor(
        @InjectRepository(Langmstb) private readonly langmstbRepository: Repository<Langmstb>,
        @InjectRepository(Mlanustb) private readonly mlanustbRepository: Repository<Mlanustb>,
        @InjectRepository(Colangtb) private readonly colangtbRepository: Repository<Colangtb>,
        @InjectRepository(Mmlangtb) private readonly mmlangtbRepository: Repository<Mmlangtb>,
    ) { }

    findOne(msNo: string): Promise<Mlanustb[]> {
        const result = this.mlanustbRepository.find({
            where: { msNo, useYn: 'Y' },
        })

        return result
    }

    languagePublicMessage(): Promise<Colangtb[]> {
        return this.colangtbRepository.find()
    }

    languageCCD(msNo: string, langCcd: string): Promise<Mmlangtb[]> {
        return this.mmlangtbRepository.find({
            where: { msNo, langCcd }
        })
    }
}

