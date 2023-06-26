import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Auth, Role } from 'src/shared';
import { LanguageService } from './language.service';

@Resolver('Language')
export class LanguageResolver {
    constructor(private readonly languageService: LanguageService) { }

    @Query('language')
    findAll() {
        return this.languageService.findAll();
    }

    @Query('languageMaster')
    @Auth(...[Role.User, Role.Admin])
    findOne(@Args('msNo') msNo: string) {
        return this.languageService.findOne(msNo);
    }

    @Query('languagePublicMessage')
    @Auth(...[Role.User, Role.Admin])
    languagePublicMessage() {
        return this.languageService.languagePublicMessage();
    }


    @Query('languageCCD')
    @Auth(...[Role.User, Role.Admin])
    languageCCD(@Args('msNo') msNo: string, @Args('langCcd') langCcd: string) {
        return this.languageService.languageCCD(msNo, langCcd);
    }

}
