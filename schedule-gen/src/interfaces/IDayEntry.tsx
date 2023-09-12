import { Dayjs } from "dayjs";

export interface IDayEntry {
    dayOfMonth: number;
    dayOfWeek: string;
    isHoliday: boolean;
    morningStartTime: Dayjs;
    morningEndTime: Dayjs;
    afternoonStartTime: Dayjs;
    afternoonEndTime: Dayjs;
    dayOfWeekNum: number;
}