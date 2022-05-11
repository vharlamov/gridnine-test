import React from 'react'
import FlightList from './flightList'

const FlightsPanel = ({ flights }) => {
	return (
		<>
			<FlightList flights={flights} />
		</>
	)
}

export default FlightsPanel
