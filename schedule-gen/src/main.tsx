import React from 'react'
import ReactDOM from 'react-dom/client'
import ScheduleGenApp from './ScheduleGenApp.tsx'
import './index.css'
import "primereact/resources/themes/md-dark-indigo/theme.css"
import "primereact/resources/primereact.min.css"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ScheduleGenApp />
  </React.StrictMode>,
)
