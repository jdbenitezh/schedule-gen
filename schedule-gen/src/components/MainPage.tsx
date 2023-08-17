import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";
import { IUserIntroParmsProps } from "../interfaces/IUserIntroParmsProps";
import MonthData from "./MonthData";
import UserIntroParms from "./UserIntroParms";


const MainPage = () => {

    const [selectedDate, setSelectedDate] = useState<Dayjs>(dayjs());

    const onGenerate = (userDate: Dayjs): void => {
        setSelectedDate(userDate)
    };

    const userIntroParmsProps: IUserIntroParmsProps = {
        onUpdateData: onGenerate
    };


    return (
        <>
            <UserIntroParms {...userIntroParmsProps} />
            <MonthData currentDate={selectedDate} />

        </>

    )
}
export default MainPage;