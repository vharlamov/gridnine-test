export function formatTime(data) {
	const days = [' вс', ' пн', ' вт', ' ср', ' чт', ' пт', ' сб']
	const months = [
		'янв.',
		'фев.',
		'мар.',
		'апр.',
		'мая',
		'июн.',
		'июл.',
		'авг.',
		'сен.',
		'окт.',
		'ноя.',
		'дек.',
	]
	const parsed = new Date(Date.parse(data))
	let mins = parsed.getMinutes()

	if (+mins < 10) mins = '0' + mins
	const time = parsed.getHours() + ':' + mins
	const date = parsed.getDate() + ' ' + months[parsed.getMonth()]
	const day = days[parsed.getDay()]

	return {
		time,
		date,
		day,
	}
}

export function duration(data) {
	const hours = Math.floor(data / 60)
	let mins = data % 60

	if (mins < 10) mins = '0' + mins.toString()

	return `  ${hours.toString()} ч ${mins} мин`
}
