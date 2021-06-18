import React from 'react'
import InputDate from '../InputDate'
import './InputDateForm.css'
const InputDateForm = ({startDate, setStartDate, endDate, setEndDate,gettingCurrency, id}) => {
    return (
    <div className="input-date-form" >
		<InputDate date={startDate} setDate={setStartDate} label="From:"/>
		<InputDate date={endDate} setDate={setEndDate} label="To:"/>
        <input className="btn"
         type="button" 
         value="Show"
         onClick={() => gettingCurrency(id, startDate, endDate)}/>
    </div>
    )
    
}

export default InputDateForm