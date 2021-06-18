import React from 'react'
import DatePicker from 'react-datepicker'
import MaskedTextInput from 'react-text-mask'
import 'react-datepicker/dist/react-datepicker.css'
import './InputDate.css'
const InputDate = ({date, setDate, label}) => {
	return (
		<div className="input-item">
            <label>{label}</label>
            <DatePicker
			type="text"
			placeholderText="yyyy-mm-dd"
            dateFormat="yyyy-MM-dd"
            selected={date}
            onChange={inputDate => setDate(inputDate)}
			customInput = {
				<MaskedTextInput
					mask={[ /\d/, /\d/, /\d/, /\d/,"-", /\d/, /\d/, "-",/\d/, /\d/]}
			  	/>
			}
            />
        </div>
	)
}

export default InputDate