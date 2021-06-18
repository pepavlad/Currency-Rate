import React, {useState} from 'react'
import './App.css';
import Chart from '../Chart'
import DropList from '../DropList'
import useFetch from '../../useFetch'
import InputDateForm from '../InputDateForm'

const App = () => {
	const [startDate, setStartDate] = useState()
	const [endDate, setEndDate] = useState()
	const [id, setId] = useState()
	const {chartData, gettingCurrency} = useFetch()
	return (
		<div className="container">
		<Chart  chartData={chartData}/>
		<DropList startDate={startDate} 
			endDate={endDate} 
			curMethod={gettingCurrency} 
			setId={setId}
		/>
		<InputDateForm startDate={startDate} 
			setStartDate={setStartDate} 
			endDate={endDate} 
			setEndDate={setEndDate}
			id={id}
			gettingCurrency={gettingCurrency}
		/>
		</div>
	)
}

export default App;
