import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Auth, Role } from 'src/shared';
import { Colangtb, Mlanustb, Mmlangtb } from './entities/language.entity';
import { Inject } from '@nestjs/common';
import { LanguageService } from './interface/language.service.interface';

@Resolver('Language')
export class LanguageResolver {
    constructor(
        @Inject('LanguageService') private readonly languageService: LanguageService
    ) { }

    @Query(() => [Mlanustb], { name: 'languageMaster' })
    @Auth(...[Role.User, Role.Admin])
    languageMaster(@Args('msNo') msNo: string): Promise<Mlanustb[]> {
        return this.languageService.languageMaster(msNo);
    }

    @Query(() => [Colangtb], { name: 'languagePublicMessage' })
    @Auth(...[Role.User, Role.Admin])
    languagePublicMessage(): Promise<Colangtb[]> {
        return this.languageService.languagePublicMessage();
    }


    @Query(() => [Mmlangtb], { name: 'languageCCD' })
    @Auth(...[Role.User, Role.Admin])
    languageCCD(@Args('msNo') msNo: string, @Args('langCcd') langCcd: string): Promise<Mmlangtb[]> {
        return this.languageService.languageCCD(msNo, langCcd);
    }

}
