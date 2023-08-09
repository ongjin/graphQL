import { InsertBugpcdtb } from "../dto/insert-bugpcdtb.input";
import { InsertBugpchtb } from "../dto/insert-bugpchtb.input";
import { InsertGwdlwktb } from "../dto/insert-gwdlwktb.input";
import { InsertGwismatb } from "../dto/insert-gwismatb.input";
import { UpdateDailyReport } from "../dto/update-dailyReport.input";
import { UpdateGwsimatb } from "../dto/update-gwsimatb.input";
import { Prolmstb, Prommstb, Prosmstb } from "../entities";
import { Bugpchtb } from "../entities/bugpchtb.entity";
import { Empinftb } from "../entities/empinftb.entity";
import { Gwdlwktb } from "../entities/gwdlwktb.entity";
import { Todo } from "../entities/todo.entity";

export interface DailyReportService {
    getSEQ(workDate: string, empNo: string, seq: string): Promise<Gwdlwktb[]>
    deleteDailyReport(workDate: string, empNo: string, seq: string): Promise<Boolean>
    prolmstbs(): Promise<Prolmstb[]>;
    prommstbs(): Promise<Prommstb[]>
    prommstb(hplCd: string): Promise<Prommstb[]>

    prolmstb(hplCd: string): Promise<Prolmstb[]>;

    prosmstb(hplCd: string, hpmCd: string): Promise<Prosmstb[]>

    employee(empNm: string, empNo: string): Promise<Empinftb>

    dailyReport(empNm: Array<string>, startDate: string, endDate: string): Promise<Gwdlwktb[]>

    updateGwdlwktb(input: UpdateDailyReport): Promise<Boolean>
    insertSI(input: UpdateGwsimatb): Promise<Boolean>
    getSeq(workDate: string, empNo: string): Promise<String>
    getDSeq(): Promise<String>
    getBSeq(): Promise<String>
    getBugSeq(): Promise<String>

    updateDSeq(workDate: string, empNo: string, seq: string, dSeq: string): Promise<Boolean>

    getBugpchtb(bSeq: string): Promise<Bugpchtb>

    insertBugpchtb(input: InsertBugpchtb): Promise<Boolean>
    deleteBugpchtb(bSeq: string): Promise<Boolean>
    insertBugpcdtb(input: InsertBugpcdtb): Promise<Boolean>
    deleteBugpcdtb(bugSeq: string): Promise<Boolean>

    deleteGwsimatb(dSeq: string): Promise<Boolean>

    getGwsimatbSeq(): Promise<String>

    updateBSeqGwdlwktb(menuGn_1: string, bSeq: string, workDate: string, empNo: string, seq: string): Promise<Boolean>

    getSlipNo(bugSeq: string): Promise<String>

    insertDailyReport(input: InsertGwdlwktb): Promise<Boolean>
    insertGwismatb(input: InsertGwismatb): Promise<Boolean>

    todo(): Promise<Todo[]>
    updateTodo(from: number, to: number): Promise<Boolean>
    deleteTodo(todoNo: number): Promise<Boolean>
    insertTodo(todoNm: string): Promise<Boolean> 
    nameUpdateTodo(todoNo: number, todoNm: string): Promise<Boolean>
}


