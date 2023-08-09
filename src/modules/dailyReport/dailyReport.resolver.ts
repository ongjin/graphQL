import { Inject } from '@nestjs/common';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Auth, CacheResult, Role } from 'src/shared';
import { InsertBugpcdtb } from './dto/insert-bugpcdtb.input';
import { InsertBugpchtb } from './dto/insert-bugpchtb.input';
import { InsertGwdlwktb } from './dto/insert-gwdlwktb.input';
import { InsertGwismatb } from './dto/insert-gwismatb.input';
import { UpdateDailyReport } from './dto/update-dailyReport.input';
import { UpdateGwsimatb } from './dto/update-gwsimatb.input';
import { Prolmstb, Prommstb, Prosmstb } from './entities';
import { Bugpchtb } from './entities/bugpchtb.entity';
import { Empinftb } from './entities/empinftb.entity';
import { Gwdlwktb } from './entities/gwdlwktb.entity';
import { Todo } from './entities/todo.entity';
import { DailyReportService } from './interface/dailyReport.service.interface';

@Resolver()
export class DailyReportResolver {
    constructor(
        @Inject('DailyReportService') private readonly prolmstbService: DailyReportService
    ) { }

    @Query(() => Gwdlwktb, { name: 'getSEQ' })
    @Auth(...[Role.User])
    getSEQ(@Args('workDate') workDate: string, @Args('empNo') empNo: string, @Args('seq') seq: string): Promise<Gwdlwktb[]> {
        return this.prolmstbService.getSEQ(workDate, empNo, seq);
    }

    @Query(() => [Prolmstb], { name: 'prolmstbs' })
    @Auth(...[Role.User])
    prolmstbs(): Promise<Prolmstb[]> {
        return this.prolmstbService.prolmstbs();
    }

    @Query(() => [Prolmstb], { name: 'prommstbs' })
    @Auth(...[Role.User])
    prommstbs(): Promise<Prommstb[]> {
        return this.prolmstbService.prommstbs();
    }
    
    @Query(() => [Prolmstb], { name: 'prosmstb' })
    @Auth(...[Role.User])
    prosmstb(@Args('hplCd') hplCd: string, @Args('hpmCd') hpmCd: string): Promise<Prosmstb[]>{
        return this.prolmstbService.prosmstb(hplCd, hpmCd);
    }

    @Query(() => [Prolmstb], { name: 'prommstb' })
    @Auth(...[Role.User])
    prommstb(@Args("hplCd") hplCd: string): Promise<Prommstb[]> {
        return this.prolmstbService.prommstb(hplCd);
    }

    @Query(() => [Prolmstb], { name: 'prolmstb' })
    @Auth(...[Role.User])
    prolmstb(@Args('hplCd') hplCd: string): Promise<Prolmstb[]> {
        return this.prolmstbService.prolmstb(hplCd);
    }

    @Query(() => Empinftb, { name: 'employee' })
    @Auth(Role.User)
    employee(@Args('empNm') empNm: string, @Args('empNo') empNo: string): Promise<Empinftb> {
        return this.prolmstbService.employee(empNm, empNo)
    }

    @Query(() => [Gwdlwktb], { name: 'dailyReport' })
    @Auth(Role.User)
    @CacheResult()
    dailyReport(@Args('empNm') empNm: Array<string>, @Args('startDate') startDate: string, @Args('endDate') endDate: string): Promise<Gwdlwktb[]> {
        return this.prolmstbService.dailyReport(empNm, startDate, endDate)
    }

    @Mutation(() => Boolean, { name: 'updateDailyReport' })
    @Auth(Role.User)
    updateGwdlwktb(@Args('input') input: UpdateDailyReport): Promise<Boolean> {
        return this.prolmstbService.updateGwdlwktb(input)
    }

    @Mutation(() => Boolean, { name: 'insertSI' })
    @Auth(Role.User)
    insertSI(@Args('input') input: UpdateGwsimatb): Promise<Boolean> {
        return this.prolmstbService.insertSI(input)
    }

    @Query(() => String, { name: 'getSeq' })
    @Auth(Role.User)
    getSeq(@Args('workDate') workDate: string, @Args('empNo') empNo: string): Promise<String> {
        return this.prolmstbService.getSeq(workDate, empNo)
    }
    @Query(() => String, { name: 'getDSeq' })
    @Auth(Role.User)
    getDSeq(): Promise<String> {
        return this.prolmstbService.getDSeq()
    }
    @Query(() => String, { name: 'getBSeq' })
    @Auth(Role.User)
    getBSeq(): Promise<String> {
        return this.prolmstbService.getBSeq()
    }
    @Query(() => String, { name: 'getBugSeq' })
    @Auth(Role.User)
    getBugSeq(): Promise<String> {
        return this.prolmstbService.getBugSeq()
    }

    @Mutation(() => Boolean, { name: 'updateDSeq' })
    @Auth(Role.User)
    async updateDSeq(@Args('workDate') workDate: string, @Args('empNo') empNo: string, @Args('seq') seq: string, @Args('dSeq') dSeq: string): Promise<Boolean> {
        return this.prolmstbService.updateDSeq(workDate, empNo, seq, dSeq)
    }

    @Mutation(() => Boolean, { name: 'deleteDailyReport' })
    @Auth(Role.User)
    deleteDailyReport(@Args('workDate') workDate: string, @Args('empNo') empNo: string, @Args('seq') seq: string): Promise<Boolean> {
        return this.prolmstbService.deleteDailyReport(workDate, empNo, seq)
    }

    @Query(() => Bugpchtb, { name: 'getBugpchtb' })
    @Auth(Role.User)
    getBugpchtb(@Args('bSeq') bSeq: string): Promise<Bugpchtb> {
        return this.prolmstbService.getBugpchtb(bSeq)
    }

    @Query(() => String, { name: 'getGwsimatbSeq' })
    @Auth(Role.User)
    getGwsimatbSeq(): Promise<String> {
        return this.prolmstbService.getGwsimatbSeq()
    }

    @Mutation(() => Boolean, { name: 'insertBugpchtb' })
    @Auth(Role.User)
    insertBugpchtb(@Args('input') input: InsertBugpchtb): Promise<Boolean> {
        return this.prolmstbService.insertBugpchtb(input)
    }

    @Mutation(() => Boolean, { name: 'deleteBugpchtb' })
    @Auth(Role.User)
    deleteBugpchtb(@Args('bSeq') bSeq: string): Promise<Boolean> {
        return this.prolmstbService.deleteBugpchtb(bSeq)
    }

    @Mutation(() => Boolean, { name: 'insertBugpcdtb' })
    @Auth(Role.User)
    insertBugpcdtb(input: InsertBugpcdtb): Promise<Boolean> {
        return this.prolmstbService.insertBugpcdtb(input)
    }

    @Mutation(() => Boolean, { name: 'deleteBugpcdtb' })
    @Auth(Role.User)
    deleteBugpcdtb(@Args('bugSeq') bugSeq: string): Promise<Boolean> {
        return this.prolmstbService.deleteBugpcdtb(bugSeq)
    }

    @Mutation(() => Boolean, { name: 'deleteGwsimatb' })
    @Auth(Role.User)
    deleteGwsimatb(@Args('dSeq') dSeq: string): Promise<Boolean> {
        return this.prolmstbService.deleteGwsimatb(dSeq)
    }

    @Mutation(() => Boolean, { name: 'updateBSeqGwdlwktb' })
    @Auth(Role.User)
    updateBSeqGwdlwktb(@Args('menuGn_1') menuGn_1: string, @Args('bSeq') bSeq: string, @Args('workDate') workDate: string, @Args('empNo') empNo: string, @Args('seq') seq: string): Promise<Boolean> {
        return this.prolmstbService.updateBSeqGwdlwktb(menuGn_1, bSeq, workDate, empNo, seq)
    }

    @Query(() => String, { name: 'getSlipNo' })
    @Auth(Role.User)
    getSlipNo(@Args('bugSeq') bugSeq: string): Promise<String> {
        return this.prolmstbService.getSlipNo(bugSeq)
    }

    @Mutation(() => Boolean, { name: 'insertDailyReport' })
    @Auth(Role.User)
    insertDailyReport(@Args('input') input: InsertGwdlwktb): Promise<Boolean> {
        return this.prolmstbService.insertDailyReport(input)
    }

    @Mutation(() => Boolean, { name: 'insertGwismatb' })
    @Auth(Role.User)
    insertGwismatb(input: InsertGwismatb): Promise<Boolean> {
        return this.prolmstbService.insertGwismatb(input)
    }

    @Query(() => String, { name: 'todo' })
    @Auth(Role.User)
    todo(): Promise<Todo[]> {
        return this.prolmstbService.todo()
    }

    @Mutation(() => Boolean, { name: 'updateTodo' })
    @Auth(Role.User)
    updateTodo(@Args('from') from: number, @Args('to') to: number): Promise<Boolean> {
        return this.prolmstbService.updateTodo(from, to)
    }

    @Mutation(() => Boolean, { name: 'deleteTodo' })
    @Auth(Role.User)
    deleteTodo(@Args('todoNo') todoNo: number): Promise<Boolean> {
        return this.prolmstbService.deleteTodo(todoNo)
    }

    @Mutation(() => Boolean, { name: 'insertTodo' })
    @Auth(Role.User)
    insertTodo(@Args('todoNm') todoNm: string): Promise<Boolean> {
        return this.prolmstbService.insertTodo(todoNm)
    }

    @Mutation(() => Boolean, { name: 'nameUpdateTodo' })
    @Auth(Role.User)
    nameUpdateTodo(@Args('todoNo') todoNo: number, @Args('todoNm') todoNm: string): Promise<Boolean> {
        return this.prolmstbService.nameUpdateTodo(todoNo, todoNm)
    }


}