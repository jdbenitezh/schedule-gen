import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { Dayjs } from "dayjs";
import { IDayEntry } from "../interfaces/IDayEntry";
import { IMonthDataProps } from "../interfaces/IMonthDataProps";


const setStartDate = (date: Dayjs): Dayjs => {
    let retVal: Dayjs = date.clone();
    retVal.date(1);

    return retVal;
}


const calculateColor = (dayOfWeekNum: number): { color: string } => {
    return {
        color: dayOfWeekNum === 0 || dayOfWeekNum === 6 ? 'red' : '',
    };
}

const createItem = (startDate: Dayjs, dayOfMonth: number): IDayEntry => {

    let date: Dayjs = startDate.clone().locale('es-ES');
    date = date.startOf('day');
    date = date.date(dayOfMonth);
    console.log(date.format("DD/MM/YYYY"));



    return {
        dayOfMonth: dayOfMonth,
        dayOfWeek: capitalize(date.format('dddd')),
        isHoliday: false,
        morningStartTime: date.startOf('day').minute(0).hour(8),
        morningEndTime: date.startOf('day').hour(14).minute(0),
        afternoonStartTime: date.startOf('day').hour(15).minute(0),
        afternoonEndTime: date.startOf('day').hour(17).minute(30),
        dayOfWeekNum: date.day(),
    }
}

const capitalize = (str: string): string => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

const MonthData = ({ currentDate }: IMonthDataProps) => {

    let items: IDayEntry[] = [];



    const endOfMoth = currentDate.endOf('month');
    const startDate = setStartDate(currentDate);

    for (let index = 0; index < endOfMoth.date(); index++) {
        items.push(createItem(startDate, index + 1))
    }

    return (
        <>


            <TableContainer component={Paper}>
                <Table size="small" sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell align="center">Día</TableCell>
                            <TableCell align="center">Inicio Mañana</TableCell>
                            <TableCell align="center">Fín Mañana</TableCell>
                            <TableCell align="center">Inicio Tarde</TableCell>
                            <TableCell align="center">Fin Tarde</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody >
                        {items.map((row) => (
                            <TableRow
                                key={row.dayOfMonth}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row" style={calculateColor(row.dayOfWeekNum)}>
                                    {row.dayOfWeek}
                                </TableCell>
                                <TableCell align="center" style={calculateColor(row.dayOfWeekNum)}>{row.dayOfMonth}</TableCell>
                                <TableCell align="center">{row.morningStartTime.format("HH:mm")}</TableCell>
                                <TableCell align="center">{row.morningEndTime.format("HH:mm")}</TableCell>
                                <TableCell align="center">{row.afternoonStartTime.format("HH:mm")}</TableCell>
                                <TableCell align="center">{row.afternoonEndTime.format("HH:mm")}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>


        </>
    );
}

export default MonthData;

