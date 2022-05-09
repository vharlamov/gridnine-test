import React, { useState } from 'react'
import FlightCard from './flightCard'

const FlightList = ({ flights }) => {
	const [cropNum, setCropNum] = useState(5)

	const handleAdd = () => {
		setCropNum((prev) => (prev += 5))
	}

	const croppedFlights = () => {
		if (cropNum > flights.length) return flights
		return flights.slice(0, cropNum - 1)
	}

	return (
		<div className='flight-list'>
			{!flights.length ? (
				<div className='no-flights'>
					Нет полётов по вашему запросу, измените параметры поиска
				</div>
			) : (
				<div>
					{croppedFlights().map((fl, i) => (
						<FlightCard flight={fl.flight} key={i} />
					))}
				</div>
			)}
			{flights.length >= cropNum ? (
				<button className='control-button' onClick={handleAdd}>
					Показать ещё
				</button>
			) : null}
		</div>
	)
}

export default FlightList
