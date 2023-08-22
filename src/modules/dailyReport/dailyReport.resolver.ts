import { Inject } from '@nestjs/common';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Auth, Cacheable, CacheEvict, Role } from 'src/shared';
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
        @Inject('DailyReportService') private readonly prolmstbService: DailyReportService,
    ) { }

    @Query(() => Gwdlwktb, { name: 'getSEQ' })
    @Auth(...[Role.User])
    @Cacheable({ ttl: 1000 * 10 })
    getSEQ(@Args('workDate') workDate: string, @Args('empNo') empNo: string, @Args('seq') seq: string): Promise<Gwdlwktb[]> {
        return this.prolmstbService.getSEQ(workDate, empNo, seq);
    }

    @Query(() => [Prolmstb], { name: 'prolmstbs' })
    @Auth(...[Role.User])
    @Cacheable({ ttl: 1000 * 100 })
    prolmstbs(): Promise<Prolmstb[]> {
        return this.prolmstbService.prolmstbs();
    }

    @Query(() => [Prolmstb], { name: 'prommstbs' })
    @Auth(...[Role.User])
    @Cacheable({ ttl: 1000 * 10 })
    prommstbs(): Promise<Prommstb[]> {
        return this.prolmstbService.prommstbs();
    }

    @Query(() => [Prolmstb], { name: 'prosmstb' })
    @Auth(...[Role.User])
    @Cacheable({ ttl: 1000 * 10 })
    prosmstb(@Args('hplCd') hplCd: string, @Args('hpmCd') hpmCd: string): Promise<Prosmstb[]> {
        return this.prolmstbService.prosmstb(hplCd, hpmCd);
    }

    @Query(() => [Prolmstb], { name: 'prommstb' })
    @Auth(...[Role.User])
    @Cacheable({ ttl: 1000 * 10 })
    prommstb(@Args("hplCd") hplCd: string): Promise<Prommstb[]> {
        return this.prolmstbService.prommstb(hplCd);
    }

    @Query(() => [Prolmstb], { name: 'prolmstb' })
    @Auth(...[Role.User])
    @Cacheable({ ttl: 1000 * 10 })
    prolmstb(@Args('hplCd') hplCd: string): Promise<Prolmstb[]> {
        return this.prolmstbService.prolmstb(hplCd);
    }

    @Query(() => Empinftb, { name: 'employee' })
    @Auth(Role.User)
    @Cacheable({ ttl: 1000 * 10 })
    employee(@Args('empNm') empNm: string, @Args('empNo') empNo: string): Promise<Empinftb> {
        return this.prolmstbService.employee(empNm, empNo)
    }

    @Query(() => [Gwdlwktb], { name: 'dailyReport' })
    @Auth(Role.User)
    @Cacheable({ ttl: 1000 * 100 })
    dailyReport(@Args('empNm') empNm: Array<string>, @Args('startDate') startDate: string, @Args('endDate') endDate: string): Promise<Gwdlwktb[]> {
        // const cacheResult = await this.cacheManager.get<[Gwdlwktb]>(`user_${empNm}_${startDate}_${endDate}`)
        // if (cacheResult) {
        //     return cacheResult
        // }

        // const result = await this.prolmstbService.dailyReport(empNm, startDate, endDate)
        // await this.cacheManager.set(`user_${empNm}_${startDate}_${endDate}`, result, 1000 * 2)
        // return result

        return this.prolmstbService.dailyReport(empNm, startDate, endDate)
    }

    @Mutation(() => Boolean, { name: 'updateDailyReport' })
    @Auth(Role.User)
    @Cacheable({ ttl: 1000 * 10 })
    updateGwdlwktb(@Args('input') input: UpdateDailyReport): Promise<Boolean> {
        return this.prolmstbService.updateGwdlwktb(input)
    }

    @Mutation(() => Boolean, { name: 'insertSI' })
    @Auth(Role.User)
    @Cacheable({ ttl: 1000 * 10 })
    insertSI(@Args('input') input: UpdateGwsimatb): Promise<Boolean> {
        return this.prolmstbService.insertSI(input)
    }

    @Query(() => String, { name: 'getSeq' })
    @Auth(Role.User)
    @Cacheable({ ttl: 1000 * 10 })
    getSeq(@Args('workDate') workDate: string, @Args('empNo') empNo: string): Promise<String> {
        return this.prolmstbService.getSeq(workDate, empNo)
    }
    @Query(() => String, { name: 'getDSeq' })
    @Auth(Role.User)
    @Cacheable({ ttl: 1000 * 10 })
    getDSeq(): Promise<String> {
        return this.prolmstbService.getDSeq()
    }
    @Query(() => String, { name: 'getBSeq' })
    @Auth(Role.User)
    @Cacheable({ ttl: 1000 * 10 })
    getBSeq(): Promise<String> {
        return this.prolmstbService.getBSeq()
    }
    @Query(() => String, { name: 'getBugSeq' })
    @Auth(Role.User)
    @Cacheable({ ttl: 1000 * 10 })
    getBugSeq(): Promise<String> {
        return this.prolmstbService.getBugSeq()
    }

    @Mutation(() => Boolean, { name: 'updateDSeq' })
    @Auth(Role.User)
    @Cacheable({ ttl: 1000 * 10 })
    async updateDSeq(@Args('workDate') workDate: string, @Args('empNo') empNo: string, @Args('seq') seq: string, @Args('dSeq') dSeq: string): Promise<Boolean> {
        return this.prolmstbService.updateDSeq(workDate, empNo, seq, dSeq)
    }

    @Mutation(() => Boolean, { name: 'deleteDailyReport' })
    @Auth(Role.User)
    @Cacheable({ ttl: 1000 * 10 })
    deleteDailyReport(@Args('workDate') workDate: string, @Args('empNo') empNo: string, @Args('seq') seq: string): Promise<Boolean> {
        return this.prolmstbService.deleteDailyReport(workDate, empNo, seq)
    }

    @Query(() => Bugpchtb, { name: 'getBugpchtb' })
    @Auth(Role.User)
    @Cacheable({ ttl: 1000 * 10 })
    getBugpchtb(@Args('bSeq') bSeq: string): Promise<Bugpchtb> {
        return this.prolmstbService.getBugpchtb(bSeq)
    }

    @Query(() => String, { name: 'getGwsimatbSeq' })
    @Auth(Role.User)
    @Cacheable({ ttl: 1000 * 10 })
    getGwsimatbSeq(): Promise<String> {
        return this.prolmstbService.getGwsimatbSeq()
    }

    @Mutation(() => Boolean, { name: 'insertBugpchtb' })
    @Auth(Role.User)
    @Cacheable({ ttl: 1000 * 10 })
    insertBugpchtb(@Args('input') input: InsertBugpchtb): Promise<Boolean> {
        return this.prolmstbService.insertBugpchtb(input)
    }

    @Mutation(() => Boolean, { name: 'deleteBugpchtb' })
    @Auth(Role.User)
    @Cacheable({ ttl: 1000 * 10 })
    deleteBugpchtb(@Args('bSeq') bSeq: string): Promise<Boolean> {
        return this.prolmstbService.deleteBugpchtb(bSeq)
    }

    @Mutation(() => Boolean, { name: 'insertBugpcdtb' })
    @Auth(Role.User)
    @Cacheable({ ttl: 1000 * 10 })
    insertBugpcdtb(input: InsertBugpcdtb): Promise<Boolean> {
        return this.prolmstbService.insertBugpcdtb(input)
    }

    @Mutation(() => Boolean, { name: 'deleteBugpcdtb' })
    @Auth(Role.User)
    @Cacheable({ ttl: 1000 * 10 })
    deleteBugpcdtb(@Args('bugSeq') bugSeq: string): Promise<Boolean> {
        return this.prolmstbService.deleteBugpcdtb(bugSeq)
    }

    @Mutation(() => Boolean, { name: 'deleteGwsimatb' })
    @Auth(Role.User)
    @Cacheable({ ttl: 1000 * 10 })
    deleteGwsimatb(@Args('dSeq') dSeq: string): Promise<Boolean> {
        return this.prolmstbService.deleteGwsimatb(dSeq)
    }

    @Mutation(() => Boolean, { name: 'updateBSeqGwdlwktb' })
    @Auth(Role.User)
    @Cacheable({ ttl: 1000 * 10 })
    updateBSeqGwdlwktb(@Args('menuGn_1') menuGn_1: string, @Args('bSeq') bSeq: string, @Args('workDate') workDate: string, @Args('empNo') empNo: string, @Args('seq') seq: string): Promise<Boolean> {
        return this.prolmstbService.updateBSeqGwdlwktb(menuGn_1, bSeq, workDate, empNo, seq)
    }

    @Query(() => String, { name: 'getSlipNo' })
    @Auth(Role.User)
    @Cacheable({ ttl: 1000 * 10 })
    getSlipNo(@Args('bugSeq') bugSeq: string): Promise<String> {
        return this.prolmstbService.getSlipNo(bugSeq)
    }

    @Mutation(() => Boolean, { name: 'insertDailyReport' })
    @Auth(Role.User)
    @Cacheable({ ttl: 1000 * 10 })
    insertDailyReport(@Args('input') input: InsertGwdlwktb): Promise<Boolean> {
        return this.prolmstbService.insertDailyReport(input)
    }

    @Mutation(() => Boolean, { name: 'insertGwismatb' })
    @Auth(Role.User)
    @Cacheable({ ttl: 1000 * 10 })
    insertGwismatb(input: InsertGwismatb): Promise<Boolean> {
        return this.prolmstbService.insertGwismatb(input)
    }

    @Query(() => String, { name: 'todo' })
    @Auth(Role.User)
    @Cacheable({ ttl: 1000 * 10, namespace: "todo" })
    todo(): Promise<Todo[]> {
        return this.prolmstbService.todo()
    }

    @Mutation(() => Boolean, { name: 'updateTodo' })
    @Auth(Role.User)
    @Cacheable({ ttl: 1000 * 10 })
    updateTodo(@Args('from') from: number, @Args('to') to: number): Promise<Boolean> {
        return this.prolmstbService.updateTodo(from, to)
    }

    @Mutation(() => Boolean, { name: 'deleteTodo' })
    @Auth(Role.User)
    @Cacheable({ ttl: 1000 * 10 })
    deleteTodo(@Args('todoNo') todoNo: number): Promise<Boolean> {
        return this.prolmstbService.deleteTodo(todoNo)
    }

    @Mutation(() => Boolean, { name: 'insertTodo' })
    @Auth(Role.User)
    @Cacheable({ ttl: 1000 * 10 })
    insertTodo(@Args('todoNm') todoNm: string): Promise<Boolean> {
        return this.prolmstbService.insertTodo(todoNm)
    }

    @Mutation(() => Boolean, { name: 'nameUpdateTodo' })
    @Auth(Role.User)
    @Cacheable({ ttl: 1000 * 10 })
    nameUpdateTodo(@Args('todoNo') todoNo: number, @Args('todoNm') todoNm: string): Promise<Boolean> {
        return this.prolmstbService.nameUpdateTodo(todoNo, todoNm)
    }


}