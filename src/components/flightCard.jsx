import React from 'react'
import LegCard from './legCard'

const FlightCard = ({ flight }) => {
	const handleClick = () => {
		alert(`Вы выбрали перелёт компании ${flight.carrier.caption}
    ${flight.legs[0].segments[0].departureCity.caption} — ${
			flight.legs[0].segments[flight.legs[0].segments.length - 1].arrivalCity
				.caption
		} 
    ${flight.legs[1].segments[0].departureCity.caption} — ${
			flight.legs[1].segments[flight.legs[0].segments.length - 1].arrivalCity
				.caption
		}
    стоимостью ${flight.price.totalFeeAndTaxes.amount} руб.
  `)
	}

	return (
		<div className='flight-card'>
			<div className='flight-card-header'>
				<div className='carrier-name'>{flight.carrier.caption}</div>
				<div>
					<p className='price'>
						{+flight.price.totalFeeAndTaxes.amount + ' руб.'}
					</p>
					<p className='kind'>Стоимость для одного взрослого пассажира</p>
				</div>
			</div>
			{flight.legs.map((leg, i) => (
				<LegCard leg={leg} key={i} />
			))}
			<button className='flight-button' onClick={handleClick}>
				ВЫБРАТЬ
			</button>
		</div>
	)
}

export default FlightCard
