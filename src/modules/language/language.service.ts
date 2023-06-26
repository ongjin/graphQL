import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Colangtb, Langmstb, Mlanustb, Mmlangtb } from './entities/language.entity';

@Injectable()
export class LanguageService {
    constructor(
        @InjectRepository(Langmstb) private readonly langmstbRepository: Repository<Langmstb>,
        @InjectRepository(Mlanustb) private readonly mlanustbRepository: Repository<Mlanustb>,
        @InjectRepository(Colangtb) private readonly colangtbRepository: Repository<Colangtb>,
        @InjectRepository(Mmlangtb) private readonly mmlangtbRepository: Repository<Mmlangtb>,
    ) { }

    findAll() {
        return `This action returns all language`;
    }

    async findOne(msNo: string) {
        const result = await this.mlanustbRepository.find({
            where: { msNo, useYn: 'Y' },
        })

        return result
    }

    languagePublicMessage() {
        return this.colangtbRepository.find()
    }

    languageCCD(msNo: string, langCcd: string) {
        return this.mmlangtbRepository.find({
            where: { msNo, langCcd }
        })
    }
}

