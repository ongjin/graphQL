import { Module } from '@nestjs/common';
import { LanguageServiceImpl } from './language.service';
import { LanguageResolver } from './language.resolver';
import { Colangtb, Langmstb, Mlanustb, Mmlangtb } from './entities/language.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
        TypeOrmModule.forFeature([Langmstb, Mlanustb, Colangtb, Mmlangtb])
    ],
    providers: [
        LanguageResolver,
        { provide: 'LanguageService', useClass: LanguageServiceImpl }
    ]
})
export class LanguageModule { }
