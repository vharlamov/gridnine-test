import React from 'react'
import { formatTime, duration } from '../utilities/time'

const LegCard = ({ leg }) => {
	const segments = leg.segments
	const segmentFirst = segments[0]
	const segmentLast = segments[segments.length - 1]
	const departureCity = { ...segmentFirst.departureCity }
	const departureAirport = { ...segmentFirst.departureAirport }
	const arrivalCity = { ...segmentLast.arrivalCity }
	const arrivalAirport = { ...segmentLast.arrivalAirport }
	const departureDate = segmentFirst.departureDate
	const arrivalDate = segmentLast.arrivalDate

	const transfers = [
		'Без пересадок',
		'1 пересадка',
		'2 пересадки',
		'3 пересадки',
	]

	// const date = formatTime()

	return (
		<div className='leg-card'>
			<div className='route'>
				{departureCity.caption}
				{','}&nbsp;
				{departureAirport.caption}{' '}
				<span className='blue-point'>({departureAirport.uid})</span>{' '}
				<span className='material-icons blue-point'>&nbsp;east&nbsp;</span>
				{arrivalCity.caption}
				{','}&nbsp;
				{arrivalAirport.caption}{' '}
				<span className='blue-point'>({arrivalAirport.uid})</span>{' '}
			</div>
			<div className='time'>
				<div className='left-date'>
					<span className='time-num'>{formatTime(departureDate).time}</span>{' '}
					<span className='date-num blue-point bold'>
						{formatTime(departureDate).date + formatTime(departureDate).day}
					</span>
				</div>
				<div className='duration bold'>
					<span className='material-icons'>schedule</span>&nbsp;
					<span> {duration(leg.duration)}</span>
				</div>
				<div className='right-date'>
					<span className='date-num blue-point bold'>
						{formatTime(arrivalDate).date + formatTime(arrivalDate).day}
					</span>{' '}
					<span className='time-num'>{formatTime(arrivalDate).time}</span>
				</div>
			</div>
			<div className='transfers'>
				<hr className='hr' />
				<div className='transfers-data'>{transfers[segments.length - 1]}</div>
			</div>
		</div>
	)
}

export default LegCard
