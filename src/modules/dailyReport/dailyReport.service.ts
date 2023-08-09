import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Prolmstb, Prommstb, Prosmstb } from './entities';
import { Repository, Like, Between, MoreThan, In, LessThan } from 'typeorm';
import { DailyReportService } from './interface/dailyReport.service.interface';
import { Empinftb } from './entities/empinftb.entity';
import { Gwdlwktb } from './entities/gwdlwktb.entity';
import { UpdateDailyReport } from './dto/update-dailyReport.input';
import { Gwsimatb } from './entities/gwsimatb.entity';
import { UpdateGwsimatb } from './dto/update-gwsimatb.input';
import { Bugpchtb } from './entities/bugpchtb.entity';
import { Bugpcdtb } from './entities/bugpcdtb.entity';
import { InsertBugpchtb } from './dto/insert-bugpchtb.input';
import { InsertBugpcdtb } from './dto/insert-bugpcdtb.input';
import { InsertGwdlwktb } from './dto/insert-gwdlwktb.input';
import { InsertGwismatb } from './dto/insert-gwismatb.input';
import { Todo } from './entities/todo.entity';
import { DateService } from 'src/shared';

@Injectable()
export class DailyReportServiceImpl implements DailyReportService {

	constructor(
		@InjectRepository(Prolmstb) private readonly prolmstbRepository: Repository<Prolmstb>,
		@InjectRepository(Empinftb) private readonly empinftbRepository: Repository<Empinftb>,
		@InjectRepository(Gwdlwktb) private readonly gwdlwktbRepository: Repository<Gwdlwktb>,
		@InjectRepository(Prommstb) private readonly prommstbRepository: Repository<Prommstb>,
		@InjectRepository(Prosmstb) private readonly prosmstbRepository: Repository<Prosmstb>,
		@InjectRepository(Gwsimatb) private readonly gwsimatbRepository: Repository<Gwsimatb>,
		@InjectRepository(Bugpchtb) private readonly bugpchtbRepository: Repository<Bugpchtb>,
		@InjectRepository(Bugpcdtb) private readonly bugpcdtbRepository: Repository<Bugpcdtb>,
		@InjectRepository(Todo) private readonly todoRepository: Repository<Todo>,
		private readonly dateService: DateService
	) { }

	async deleteDailyReport(workDate: string, empNo: string, seq: string): Promise<Boolean> {
		const dailyReport = await this.gwdlwktbRepository.findOneBy({ workDate, empNo, seq })
		try {
			await this.gwdlwktbRepository.remove(dailyReport)
			return true
		} catch (error) {
			return false
		}
	}

	getSEQ(workDate: string, empNo: string, seq: string): Promise<Gwdlwktb[]> {
		return this.gwdlwktbRepository.findBy({ workDate, empNo, seq })
	}

	prolmstbs(): Promise<Prolmstb[]> {
		return this.prolmstbRepository
			.createQueryBuilder("prolmstb")
			.leftJoinAndSelect("prolmstb.prommstbs", "prommstb")
			.leftJoinAndSelect("prommstb.prosmstbs", "prosmstb")
			.where("prosmstb.createDate > :createDate", { createDate: "20210731" })
			.orWhere("prosmstb.hplCd In('0002', '0003')")
			.getMany();
		return this.prolmstbRepository.find({
			relations: ['prommstbs'],
			where: {
				prommstbs: {
					prosmstbs: {
						createDate: MoreThan('20210731')
					}
				}
			}
		})
	}

	prommstbs(): Promise<Prommstb[]> {
		return this.prommstbRepository.find()
	}
	prommstb(hplCd: string): Promise<Prommstb[]> {
		return this.prommstbRepository.find({
			where: [
				{
					hplCd,
					createDate: MoreThan('20210731')
				},
				{ hplCd }
			]
		})
	}

	prolmstb(hplCd: string): Promise<Prolmstb[]> {
		return this.prolmstbRepository.find({
			where: { hplCd }
		})
		// return this.prolmstbRepository.findOneBy({ hplCd })
	}

	prosmstb(hplCd: string, hpmCd: string): Promise<Prosmstb[]> {
		if (hplCd === "0001") {
			return this.prosmstbRepository.find({
				where: [
					{
						hplCd,
						hpmCd,
						createDate: MoreThan('20210731')
					}
				]
			})
		} else {
			return this.prosmstbRepository.find({
				where: [
					{
						hplCd,
						hpmCd,
					}
				]
			})
		}
	}

	employee(empNm: string, empNo: string): Promise<Empinftb> {
		return this.empinftbRepository.findOne({
			where: empNm && empNo ? { empNm: Like(`%${empNm}%`), empNo } :
				empNm ? { empNm: Like(`%${empNm}%`) } : { empNo }
		})
	}

	dailyReport(empNm: Array<string>, startDate: string, endDate: string): Promise<Gwdlwktb[]> {
		return this.gwdlwktbRepository.find({
			where: [
				{
					workDate: Between(
						startDate,
						endDate
					),
					empinftb: {
						empNm: In(empNm),
						deptCd: In(['14', '16', '17', '21', '30'])
					},
				},
				// OR
				{
					workDate: Between(
						startDate,
						endDate
					),
					empinftb: {
						empNm: In(empNm),
					},
					empNo: '0962'
				},
			],
			relations: ['gwgroptb', 'gwsimatb', 'prosmstb', 'prommstb', 'prolmstb', 'empinftb']
		})
	}


	async updateBSeqGwdlwktb(menuGn_1: string, bSeq: string, workDate: string, empNo: string, seq: string): Promise<Boolean> {
		try {
			await this.gwdlwktbRepository.save({ menuGn_1, bSeq, workDate, empNo, seq, confirmFg: '0' })
			return true
		} catch (error) {
			return false
		}
	}

	async updateGwdlwktb(input: UpdateDailyReport): Promise<Boolean> {
		const { workDate, empNo, seq, hplCd, hpmCd, hpsCd } = input
		// 존재하는 일별보고인지 확인
		const dailyReport = await this.gwdlwktbRepository.findOneBy({ workDate, empNo, seq, confirmFg: '0' });

		// 일별보고 없으면 리턴
		if (!dailyReport) {
			throw new Error('dailyReport not found');
		}

		// SI유지보수 내역에 등록된 내역이 있으면 먼저 삭제 후 다시 등록.
		if (dailyReport.dSeq) {
			this.gwsimatbRepository.delete({ dSeq: dailyReport.dSeq })
		}


		try {
			// 일별보고 업데이트
			// 일별보고에 D_SEQ, MENU_GN UPDATE
			// await this.gwdlwktbRepository.save(input)
			await this.gwdlwktbRepository.save({ ...input, menuGn: '', dSeq: '' })

			// // 만약, 운영업무의 계약 SI운영 유지보수업무 혹은 미계약 SI운영 유지보수업무라면, SI유지보수 내역에 자동INSERT
			// if (hplCd == '0002' && (hpmCd == '0001' || hpsCd == '0002')) {
			// 	const siSeq = await this.gwsimatbRepository.createQueryBuilder("gwsimatb").select("NVL(MAX(SEQ), 0) + 1", "SEQ").getRawOne().then(res => res.SEQ)
			// 	const empNm = await this.empinftbRepository.findOneBy({ empNo: input.empNo })

			// 	if (dailyReport.dSeq == '') {
			// 		dailyReport.dSeq = await this.gwdlwktbRepository.createQueryBuilder('gwdlwktb').select('LPAD(MAX(D_SEQ)+1,7,0)', "D_SEQ").getRawOne().then(res => res.D_SEQ)
			// 		if (dailyReport.dSeq == '') dailyReport.dSeq = '0000001'
			// 	}
			// }

			return true
		} catch (error) {
			return false
		}
	}

	async insertSI(input: UpdateGwsimatb): Promise<Boolean> {
		const date = this.dateService.getDate(new Date())

		try {
			await this.gwsimatbRepository.save({
				asGropCd: input.asGropCd,
				receiveDate: input.workDate,
				seq: input.siSeq,
				clientNm: input.reqNm,
				receiveNm: input.empNm,
				handlingNm: input.empNm,
				handlingNm2: '',
				handlingNm3: '',
				handlingDate: input.workDate,
				manday: input.manDay,
				procFg: input.procFg,
				businessFg: '99',
				clientContent: input.reqContent,
				handlingContent: input.planContent,
				createDate: date['yymmddhh24miss'],
				createId: input.userId,
				lastDate: date['yymmddhh24miss'],
				lastId: input.userId,
				payFg: '2',
				hplCd: input.hplCd,
				hpmCd: input.hpmCd,
				hpsCd: input.hpsCd,
				symptomContent: '',
				causeContent: '',
				takeContent: input.workContent,
				modifyContent: '',
				dSeq: input.dSeq,
				maYn: 'N',
				handlingEmpNo: input.empNo,
				mTenanceYn: input.maintenanceData,
				mSrYn: input.srData
			})
			return true
		} catch (error) {
			return false
		}
	}


	async getGwsimatbSeq(): Promise<String> {
		const res = await this.gwsimatbRepository.createQueryBuilder('gwsimatb').select('NVL(MAX(SEQ),0) + 1', 'SEQ').getRawOne();
		return res.SEQ;
	}

	async getSeq(workDate: string, empNo: string): Promise<String> {
		let seq = await this.gwdlwktbRepository.createQueryBuilder('gwdlwktb')
			.select("NVL(LPAD(MAX(SEQ)+1,2,'0'),'01')", "SEQ")
			.where('gwdlwktb.workDate = :workDate', { workDate })
			.where('gwdlwktb.empNo = :empNo', { empNo })
			.getRawOne()
			.then(res => res.SEQ)

		return seq
	}
	async getDSeq(): Promise<String> {
		let dSeq = await this.gwdlwktbRepository.createQueryBuilder('gwdlwktb')
			.select('LPAD(MAX(D_SEQ)+1,7,0)', "D_SEQ")
			.where('gwdlwktb.menuGn = :menuGn', { menuGn: 'S' })
			.getRawOne()
			.then(res => res.D_SEQ)

		if (dSeq == '') dSeq = '0000001'
		return dSeq
	}
	async getBSeq(): Promise<String> {
		let bSeq = await this.gwdlwktbRepository.createQueryBuilder('gwdlwktb')
			.select('LPAD(MAX(B_SEQ)+1,7,0)', "B_SEQ")
			.where('gwdlwktb.menuGn_1 = :menuGn_1', { menuGn_1: 'B' })
			.getRawOne()
			.then(res => res.B_SEQ)

		if (bSeq == '') bSeq = '0000001'
		return bSeq
	}
	async getBugSeq(): Promise<String> {
		const bugSeq = await this.gwdlwktbRepository.createQueryBuilder()
			.select("lpad(BUG_SEQ.NEXTVAL,6,'0')", "SEQ")
			.from('DUAL', 'DUAL')
			.getRawOne()
			.then(res => res.SEQ)

		return bugSeq
	}

	async updateDSeq(workDate: string, empNo: string, seq: string, dSeq: string): Promise<Boolean> {
		try {
			await this.gwdlwktbRepository.save({
				menuGn: 'S',
				dSeq,
				workDate,
				empNo,
				seq,
				confirmFg: '0'
			})
			return true
		} catch (error) {
			return false
		}
	}

	getBugpchtb(bSeq: string): Promise<Bugpchtb> {
		return this.bugpchtbRepository.findOneBy({ bSeq })
	}

	// yyyymmdd = currentDate.toISOString().slice(0, 10).replace(/-/g, '');
	// // YYMMDDHH24MISS 형식
	// const yymmddhh24miss =
	async insertBugpchtb(input: InsertBugpchtb): Promise<Boolean> {
		const date = this.dateService.getDate(new Date())
		try {
			await this.bugpchtbRepository.save({
				bugSeq: input.bugSeq,
				discoveryDate: date['yyyymmdd'],
				createDate: date['yyyymmdd'],
				createTime: date['hh24miss'],
				createEmpNo: input.createEmpNo,
				msGroup: input.msGroup,
				limitDate: date['yyyymmdd'],
				noteFg: 'N',
				posFg: '1',
				svrFg: '1',
				webFg: '1',
				transFg: '0',
				apprFg: '0',
				bugName: input.bugName,
				bugDetail: input.bugDetail,
				remark: input.remark,
				bSeq: input.bSeq
			})
			return true
		} catch (error) {
			return false
		}
	}
	async deleteBugpchtb(bSeq: string): Promise<Boolean> {
		try {
			await this.bugpchtbRepository.delete({ bSeq })
			return true
		} catch (error) {
			return false
		}
	}
	async insertBugpcdtb(input: InsertBugpcdtb): Promise<Boolean> {
		const date = this.dateService.getDate(new Date())
		try {
			await this.bugpcdtbRepository.save({
				bugSeq: input.bugSeq,
				slipNo: input.slipNo,
				transEmpNo: input.empNo,
				transJobRate: 0,
				transFg: '0',
				apprFg: '0',
				result: '-',
				createEmpNo: input.empNo,
				createDate: date['yyyymmdd']
			})
			return true
		} catch (error) {
			return false
		}
	}
	async deleteBugpcdtb(bugSeq: string): Promise<Boolean> {
		try {
			await this.bugpcdtbRepository.delete({ bugSeq })
			return true
		} catch (error) {
			return false
		}
	}

	async deleteGwsimatb(dSeq: string): Promise<Boolean> {
		try {
			await this.gwsimatbRepository.delete({ dSeq })
			return true
		} catch (error) {
			return false
		}
	}

	async getSlipNo(bugSeq: string): Promise<String> {
		const slipNo = await this.bugpcdtbRepository.createQueryBuilder('bugpcdtb')
			.select('MAX(SLIP_NO)', 'slipNo')
			.where('bugpcdtb.bugSeq = :bugSeq', { bugSeq })
			.getRawOne()
			.then(res => res.slipNo)
		return slipNo
	}

	async insertDailyReport(input: InsertGwdlwktb): Promise<Boolean> {
		const date = this.dateService.getDate(new Date())
		try {
			await this.gwdlwktbRepository.insert({
				workDate: input.workDate,
				empNo: input.empNo,
				seq: input.seq,
				asGropCd: input.asGropCd,
				reqNm: input.reqNm,
				reqContent: input.reqContent,
				procFg: input.procFg,
				procRate: input.procRate,
				manDay: input.manDay,
				workContent: input.workContent,
				planContent: input.planContent,
				confirmFg: input.confirmFg,
				hplCd: input.hplCd,
				hpmCd: input.hpmCd,
				hpsCd: input.hpsCd,
				createDtime: date['yymmddhh24miss'],
				createId: input.userId,
				lastDtime: date['yymmddhh24miss'],
				lastId: input.userId,
				workType: input.workType,
				confirmMd: input.confirmMd,
				mSupport: input.mSupport,
				ctrtMd: input.ctrtMd
			})
			return true
		} catch (error) {
			return false
		}
	}

	async insertGwismatb(input: InsertGwismatb): Promise<Boolean> {
		const date = this.dateService.getDate(new Date())
		try {
			await this.gwsimatbRepository.insert({
				asGropCd: input.asGropCd,
				receiveDate: input.date,
				seq: input.siSeq,
				clientNm: input.reqNm,
				receiveNm: input.empNm,
				handlingNm: input.empNm,
				handlingNm2: '',
				handlingNm3: '',
				handlingDate: input.date,
				manDay: input.manDay,
				procFg: input.procFg,
				businessFg: '99',
				clientContent: input.reqContent,
				handlingContent: input.planContent,
				createDate: date['yymmddhh24miss'],
				createId: input.userId,
				lastDate: date['yymmddhh24miss'],
				lastId: input.userId,
				payFg: '2',
				hplCd: input.hplCd,
				hpmCd: input.hpmCd,
				hpsCd: input.hpsCd,
				symptomContent: '',
				causeContent: '',
				takeContent: input.workContent,
				modifyContent: '',
				dSeq: input.dSeq,
				maYn: 'N',
				handlingEmpNo: input.empNo,
				mTenanceYn: input.mTenanceYn,
				mSrYn: input.mSrYn
			})
			return true
		} catch (error) {
			return false
		}
	}

	todo(): Promise<Todo[]> {
		return this.todoRepository.find()
	}

	async updateTodo(from: number, to: number): Promise<Boolean> {
		const id1 = await this.todoRepository.findOneBy({ todoNo: from }).then(res => res.todoId)
		const id2 = await this.todoRepository.findOneBy({ todoNo: to }).then(res => res.todoId)
		try {
			await this.todoRepository.update({ todoNo: from }, { todoId: id2 })
			await this.todoRepository.update({ todoNo: to }, { todoId: id1 })
			return true
		} catch (error) {
			return false
		}
	}

	async deleteTodo(todoNo: number): Promise<Boolean> {
		const todo = await this.todoRepository.findOneBy({ todoNo })
		try {
			await this.todoRepository.remove(todo)
			return true
		} catch (error) {
			return false
		}
	}

	async insertTodo(todoNm: string): Promise<Boolean> {
		const todoNo = await this.todoRepository.createQueryBuilder()
			.select("TODO_NO_SEQ.NEXTVAL", "seq")
			.from('DUAL', 'DUAL')
			.getRawOne()
			.then(res => res.seq)
		const todoId = await this.todoRepository.createQueryBuilder()
			.select('MAX(TODO_ID) + 1', 'TODO_ID')
			.getRawOne()
			.then(res => res.TODO_ID)

		// const todo = await this.todoRepository.findOneBy([{ todoNo }, { todoId }])
		// console.log(todo);

		// if (todo) {
		// 	throw new Error('todo is already');
		// }

		// todo
		try {
			await this.todoRepository.save({ todoNo, todoId, todoNm })
			return true
		} catch (error) {
			console.log(error);

			return false
		}
	}

	async nameUpdateTodo(todoNo: number, todoNm: string): Promise<Boolean> {
		try {
			await this.todoRepository.update({ todoNo }, { todoNm })
			return true
		} catch (error) {
			return false
		}
	}
}

