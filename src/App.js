import { useState } from 'react'
import './App.css'
import Control from './components/controlPanel'
import FlightsPanel from './components/fligtsPanel'
import { flights } from './mockData/flights'
import sort from './utilities/sort'

function App() {
	const [data, setData] = useState(flights)

	const carriersUIDs = new Set()

	flights.forEach((f) => carriersUIDs.add(f.flight.carrier.uid))

	const transfers = new Set()

	flights.forEach((f) => {
		const allTransfers = f.flight.legs.reduce((acc, leg) => {
			acc += leg.segments.length - 1
			return acc
		}, 0)
		transfers.add(allTransfers)
	})

	const transfersReady = Array.from(transfers).sort()

	const carriersList = Array.from(carriersUIDs).map((uid) => {
		const flight = flights.find((f) => f.flight.carrier.uid === uid)
		return flight.flight.carrier
	})

	const handleSort = (config) => {
		const sortedData = sort(flights, config)
		setData(sortedData)
	}

	return (
		<>
			<div className='container'>
				<Control
					onSubmit={handleSort}
					carriers={carriersList}
					transfers={transfersReady}
				/>
				<FlightsPanel flights={data} />
			</div>
		</>
	)
}

export default App
