import React from 'react'
import {Bar} from 'react-chartjs-2'
import './Chart.css'

const Chart = ({chartData}) => {
	return(
		<div className="chart">
			<Bar
				options={{
					responsive: true,
					plugins: {
					  	title: {
							display: true,
							text: 'Currency rate',
							font:{
								size:25
							}
						},
						legend:{
							display: false
						}
					},	
					scales: {
						y: {
							min: 1,
							max: 4,
							ticks: {
								font:{
									size: 14
								},
								stepSize: 0.2	
							}
						},
						x: {
							ticks: {
								font:{
									size: 11
								}
							}
						}
					}				
				}}
				data={chartData} 
			/>
		</div>
	)
}
export default Chart