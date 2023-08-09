import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DateService } from 'src/shared';
import { DailyReportResolver } from './dailyReport.resolver';
import { DailyReportServiceImpl } from './dailyReport.service';
import { Prolmstb, Prommstb, Prosmstb } from './entities'
import { Bugpcdtb } from './entities/bugpcdtb.entity';
import { Bugpchtb } from './entities/bugpchtb.entity';
import { Empinftb } from './entities/empinftb.entity';
import { Gwdlwktb } from './entities/gwdlwktb.entity';
import { Gwgroptb } from './entities/gwgroptb.entity';
import { Gwsimatb } from './entities/gwsimatb.entity';
import { Todo } from './entities/todo.entity';
@Module({
    imports: [
        TypeOrmModule.forFeature([Prolmstb, Prommstb, Prosmstb, Gwgroptb, Gwdlwktb, Empinftb, Gwsimatb, Bugpchtb, Bugpcdtb, Todo]),
    ],
    providers: [
        DailyReportResolver,
        { provide: 'DailyReportService', useClass: DailyReportServiceImpl },
        DateService
    ]
})
export class DailyReportModule { }

