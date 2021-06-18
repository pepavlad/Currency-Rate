import {useState} from 'react'
import moment from 'moment'

const useFetch = () => {
    const [chartData, setChartData] = useState({
		labels: [],
			datasets:[{
				label: 'Currency',
				data: [],
				backgroundColor: ['rgba(255, 99, 132, 0.6)',
				'rgba(54, 162, 235, 0.6)',
				'rgba(255, 206, 86, 0.6)',
				'rgba(75, 192, 192, 0.6)',
				'rgba(153, 102, 255, 0.6)',
				'rgba(255, 159, 64, 0.6)',
				'rgba(255, 99, 132, 0.6)']
			}]
	})
	const gettingCurrency = async (id, startDate, endDate) => {
        if(!id) return
		if(!startDate) startDate = moment().subtract(6,'d').format('YYYY-MM-DD')
		if(!endDate) endDate =  moment().format('YYYY-MM-DD')
		const res = await fetch(`https://www.nbrb.by/API/ExRates/Rates/Dynamics/${id}?startDate=${moment(startDate).format('YYYY-MM-DD')}&endDate=${moment(endDate).format('YYYY-MM-DD')}`)
		const data = await res.json()
		const currencyRate = data.map(({Cur_OfficialRate}) => Cur_OfficialRate)
		const currencyDate = data.map(({Date}) => moment(Date).format('YYYY-MM-DD'))
		setChartData({
			labels: currencyDate,
			datasets:[{
				label: 'Currency rate',
				data: currencyRate,
				backgroundColor: ['rgba(255, 99, 132, 0.6)',
				'rgba(54, 162, 235, 0.6)',
				'rgba(255, 206, 86, 0.6)',
				'rgba(75, 192, 192, 0.6)',
				'rgba(153, 102, 255, 0.6)',
				'rgba(255, 159, 64, 0.6)',
				'rgba(255, 99, 132, 0.6)']
			}]
		})
	}
    return {chartData, gettingCurrency}
}
export default useFetch