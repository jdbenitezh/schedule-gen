import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";
import MonthData from "./MonthData";
import UserIntroParms from "./UserIntroParms";


const MainPage = () => {

    const [selectedDate, setSelectedDate] = useState<Dayjs>(dayjs());

    return (
        <>
            <UserIntroParms onUpdateDate={setSelectedDate} />
            <MonthData currentDate={selectedDate} />

        </>

    )
}
export default MainPage;