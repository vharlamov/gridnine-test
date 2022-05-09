import React, { useState } from 'react'
import { Formik, Field, Form } from 'formik'
// import { formatTime } from '../utilities/time'

const Control = ({ onSubmit, transfers, carriers }) => {
	const initialValues = {
		sort: 'asc',
		transfers: [],
		min: '0',
		max: '20000',
		carriers: [],
	}

	const [configValues, setConfigValues] = useState(initialValues)
	console.log('configValues', configValues)

	const transferOpts = [
		'Без пересадок',
		'1 пересадка',
		'2 пересадки',
		'3 пересадки',
	]

	const handleReset = () => {
		setConfigValues()
		console.log('initialValues', initialValues)
		// onSubmit(initialValues)
	}

	return (
		<div className='control'>
			<Formik initialValues={configValues} onSubmit={onSubmit}>
				{({ values }) => {
					console.log('values', values)
					return (
						<Form>
							<div id='padio-group' className='label'>
								Сортировать
							</div>
							<div
								role='group'
								aria-labelledby='radio-group'
								className='group-wrapper'
							>
								<label>
									<Field type='radio' name='sort' value='asc' />
									По возрастанию
								</label>
								<label>
									<Field type='radio' name='sort' value='desc' />
									По убыванию
								</label>
								<label>
									<Field type='radio' name='sort' value='time' />
									По времени
								</label>
								{/* <div>Сортировка: {values.sort}</div>
							<button type='submit'>Отправить</button> */}
							</div>

							<div id='check-group' className='label'>
								Фильтровать
							</div>
							<div
								role='group'
								aria-labelledby='check-group'
								className='group-wrapper'
							>
								{transfers.map((el) => (
									<label key={el}>
										<Field
											type='checkbox'
											name='transfers'
											value={el.toString()}
										/>
										{transferOpts[el]}
									</label>
								))}
							</div>

							<div id='number-group' className='label'>
								Цена
							</div>
							<div
								role='group'
								aria-labelledby='number-group'
								className='group-wrapper'
							>
								<label>
									От{' '}
									<Field
										type='number'
										name='min'
										value={values.min}
										step={100}
									/>
								</label>
								<label>
									До{' '}
									<Field
										type='number'
										name='max'
										value={values.max}
										step={100}
									/>
								</label>
								{/* <div>
								От: {values.min}, до: {values.max}
							</div>
							<button type='submit'>Отправить</button> */}
							</div>

							<div id='check-group' className='label'>
								Авиакомпании
							</div>
							<div
								role='group'
								aria-labelledby='check-group'
								className='group-wrapper'
							>
								{carriers.map((c) => (
									<label key={c.uid}>
										<Field type='checkbox' name='carriers' value={c.uid} />
										{c.caption}
									</label>
								))}

								{/* <div>Перевозчики: {values.carriers.join(', ')}</div>
							<button type='submit'>Отправить</button> */}
							</div>
							<button type='submit' className='control-button'>
								Сортировать
							</button>
							<button
								type='button'
								// onClick={handleReset}
								onClick={handleReset}
								className='control-button orange'
							>
								Сбросить настройки
							</button>
						</Form>
					)
				}}
			</Formik>
		</div>
	)
}

export default Control
