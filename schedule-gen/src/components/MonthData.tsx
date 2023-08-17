import { IMonthDataProps } from "../interfaces/IMonthDataProps";

const MonthData = ({ currentDate }: IMonthDataProps) => {
    const a: number = 10;
    const items: JSX.Element[] = [];

    for (let index = 0; index < a; index++) {
        items.push(<div key={index}>Elemento {index}</div>);
    }


    return (
        <>

            <div>{items}</div>


            <div>{currentDate.format('YYYY-MM-DD')}</div>

        </>
    );
}

export default MonthData;

