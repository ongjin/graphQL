import { Module } from '@nestjs/common';
import { SubMenuServiceImpl } from './sub-menu.service';
import { SubMenuResolver } from './sub-menu.resolver';
import { Mmbumstb, Msubmntb, SubMenu } from './entities/sub-menu.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
        TypeOrmModule.forFeature([SubMenu, Mmbumstb, Msubmntb])
    ],
    providers: [
        SubMenuResolver,
        { provide: 'SubMenuService', useClass: SubMenuServiceImpl }
    ]
})
export class SubMenuModule { }
