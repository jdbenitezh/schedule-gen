import { Button, Divider, Grid } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";
import { IUserIntroParmsProps } from "../interfaces/IUserIntroParmsProps";

const UserIntroParms = (props: IUserIntroParmsProps) => {

  const [selectedDate, setSelectedDate] = useState<Dayjs>(dayjs());

  const updateButtonClicked = () => {
    props.onUpdateData(selectedDate);
  }

  return (


    <>

      <Grid container style={{ marginTop: "1em" }}>
        <Grid item xs={12} md={6}>
          <DatePicker views={["year", "month"]} defaultValue={dayjs()}
            label="Mes a generar"
            onChange={() => setSelectedDate}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Button variant="contained"
            onClick={updateButtonClicked}
          >Generar</Button>
        </Grid>
        <Grid item xs={12} sm={12} mt={2} >
          <Divider />
        </Grid>
      </Grid >
    </>
  )
}

export default UserIntroParms;
