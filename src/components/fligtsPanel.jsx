import React from 'react'
import FlightList from './flightList'

const FlightsPanel = ({ flights }) => {
	return (
		<>
			<div className='fligts-container'>
				<FlightList flights={flights} />
			</div>
		</>
	)
}

export default FlightsPanel
