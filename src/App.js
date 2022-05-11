import { useEffect, useState } from 'react'
import './App.css'
import Control from './components/controlPanel'
import FlightsPanel from './components/fligtsPanel'
import { flights } from './mockData/flights'
import { sort, sortByPriceAndTime } from './utilities/sort'

function App() {
	const [data, setData] = useState(flights)
	const [carriers, setCarriers] = useState([])

	const carriersUIDs = new Set()

	flights.forEach((f) => carriersUIDs.add(f.flight.carrier.uid))

	useEffect(() => {
		const sorted = sortByPriceAndTime(data, 'asc')

		setData((prev) => sorted)

		setCarriers(
			Array.from(carriersUIDs).map((uid) => {
				const flight = data.find((f) => f.flight.carrier.uid === uid)
				flight.flight.carrier['bestPrice'] =
					flight.flight.price.totalFeeAndTaxes.amount
				return flight.flight.carrier
			})
		)
	}, [])

	const transfers = new Set()

	flights.forEach((f) => {
		const allTransfers = f.flight.legs.reduce((acc, leg) => {
			acc += leg.segments.length - 1
			return acc
		}, 0)
		transfers.add(allTransfers)
	})

	const transfersReady = Array.from(transfers).sort()

	const handleSort = (config) => {
		const sortedData = sort(flights, config)
		setData(sortedData)
	}

	return (
		<div className='container'>
			<Control
				onSubmit={handleSort}
				carriers={carriers}
				transfers={transfersReady}
			/>
			<FlightsPanel flights={data} />
		</div>
	)
}

export default App
