export function sort(data, config) {
	data = config.carriers.length ? filterByCarriers(data, config.carriers) : data

	data = config.transfers.length
		? filterByTransfers(data, config.transfers)
		: data

	data = filterByPrice(data, { min: config.min, max: config.max })

	data = sortByPriceAndTime(data, config.sort)

	return data
}

function filterByCarriers(data, config) {
	return data.filter((fl) => config.includes(fl.flight.carrier.uid))
}

function filterByTransfers(data, config) {
	return data.filter((fl) =>
		config.includes(
			fl.flight.legs
				.reduce((acc, leg) => {
					acc += leg.segments.length - 1
					return acc
				}, 0)
				.toString()
		)
	)
}

function filterByPrice(data, { min, max }) {
	const byPrice = data.filter((fl) => {
		const price = +fl.flight.price.totalFeeAndTaxes.amount
		return price <= +max && price >= +min
	})
	return byPrice
}

export function sortByPriceAndTime(data, method) {
	const fn = (a, b) => {
		switch (method) {
			case 'asc':
				return (
					+a.flight.price.totalFeeAndTaxes.amount -
					+b.flight.price.totalFeeAndTaxes.amount
				)
			case 'desc':
				return (
					+b.flight.price.totalFeeAndTaxes.amount -
					+a.flight.price.totalFeeAndTaxes.amount
				)
			case 'time':
				return (
					a.flight.legs.reduce((acc, leg) => acc + leg.duration) -
					b.flight.legs.reduce((acc, leg) => acc + leg.duration)
				)
			default:
				return
		}
	}

	return data.sort(fn)
}
