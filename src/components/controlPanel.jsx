import React from 'react'
import { Formik, Field, Form } from 'formik'

const Control = ({ onSubmit, transfers, carriers }) => {
	const initialValues = {
		sort: 'asc',
		transfers: [],
		min: '0',
		max: '20000',
		carriers: [],
	}

	const transferOpts = [
		'Без пересадок',
		'1 пересадка',
		'2 пересадки',
		'3 пересадки',
	]

	return (
		<div className='control'>
			<Formik initialValues={initialValues} onSubmit={onSubmit}>
				{({ values }) => {
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
										<div>
											<Field type='checkbox' name='carriers' value={c.uid} />
											{`${c.caption},`}
										</div>
										<div className='bold best-price'>
											{' '}
											{`от ${+c.bestPrice} руб.`}
										</div>
									</label>
								))}
							</div>
							<button type='submit' className='control-button'>
								Сортировать
							</button>
						</Form>
					)
				}}
			</Formik>
		</div>
	)
}

export default Control
