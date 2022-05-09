import React from 'react'
import LegCard from './legCard'

const FlightCard = ({ flight }) => {
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
			<button className='flight-button'>ВЫБРАТЬ</button>
		</div>
	)
}

export default FlightCard
