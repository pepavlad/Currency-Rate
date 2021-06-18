import React from 'react'
import Select from 'react-select'
import './DropList.css'
const DropList = ({curMethod,setId, startDate, endDate}) =>{
	const options = [
		{value: 'usd', label: 'USD', id: 145},
		{value: 'eur', label: 'EUR', id: 292},
		{value: 'rur', label: 'RUR', id: 298},
	]
	const handleChange = (event) => {
		setId(event.id)
		curMethod(event.id, startDate, endDate)
	}
	return (
		<div className="drop-list">
			<Select options={options} 
			onChange={handleChange}
			/>
		</div>
	  )
}

export default DropList