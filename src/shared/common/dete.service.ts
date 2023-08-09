import { Injectable } from '@nestjs/common';

@Injectable()
export class DateService {
    /**
     * yyyymmdd
     * yymmddhh24miss
     * hh24miss
     * @param currentDate 
     * @returns 
     */
    getDate(currentDate: Date): Object {
        const yyyymmdd = currentDate.toISOString().slice(0, 10).replace(/-/g, '');

        const yymmddhh24miss =
            currentDate.toISOString().slice(2, 4) +
            currentDate.toISOString().slice(5, 7) +
            currentDate.toISOString().slice(8, 10) +
            currentDate.toISOString().slice(11, 13) +
            currentDate.toISOString().slice(14, 16) +
            currentDate.toISOString().slice(17, 19);

        const hh24miss =
            currentDate.toISOString().slice(11, 13) +
            currentDate.toISOString().slice(14, 16) +
            currentDate.toISOString().slice(17, 19);

        return { yyyymmdd, yymmddhh24miss, hh24miss };
    }
}
