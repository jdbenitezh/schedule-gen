import './App.css'

import { Dropdown } from 'primereact/dropdown';
import { useState } from "react";
import { Card } from 'primereact/card';
import { InputSwitch } from 'primereact/inputswitch';




function ScheduleGenApp() {

  const [selectedOption, setSelectedOption] = useState<string>('');
  const [checked, setChecked] = useState<boolean>(false);

  const genOptions = [
    { name: 'Excel drv01', code: '1' },
    { name: 'PDF 2', code: '2' },

  ];
  return (
    <>

      <Card>
        <div className="formgrid grid">
          <div className="field col-12 md:col-4">
            <label htmlFor="darkMode">Dark mode</label>
            <InputSwitch inputId='darkMode' checked={checked} onChange={(e) => setChecked(e.value as boolean)} style={{ marginLeft: "1rem" }} />
          </div>
          <div className="field col-12 md:col-6">
            <span className="p-float-label">

              <Dropdown inputId="selectType"
                value={selectedOption}
                onChange={(e) => setSelectedOption(e.value)}
                options={genOptions}
                optionLabel="name"
                className="w-full md:w-22rem" />
              <label htmlFor="selectType">Gen format</label>
            </span>
          </div>

        </div>
      </Card>
    </>
  )
}

export default ScheduleGenApp
