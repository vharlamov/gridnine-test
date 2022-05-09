import React, { useState } from 'react'
import { Formik } from 'formik'

const Control = ({ onSubmit }) => {
	const initData = {
		sort: 'asc',
	}
	const [data, setData] = useState(initData)

	const handleChange = (e) => {
		setData((prev) => ({ ...prev, sort: e.target.name }))
		console.log(e.target.name)
	}

	return (
		<div className='control'>
			<h1>Контрольная панель</h1>
			<div>
				<form onSubmit={onSubmit}>
					<div>
						<label>Сортировать</label>

						<label htmlFor='asc'>По возрастанию</label>
						<input
							type='radio'
							name='asc'
							onChange={handleChange}
							value={data.sort}
						/>
						<label htmlFor='desc'>По убыванию</label>
						<input
							type='radio'
							name='desc'
							onChange={handleChange}
							value={data.sort}
						/>
						<label htmlFor='time'>По времени</label>
						<input
							type='radio'
							name='time'
							onChange={handleChange}
							value={data.sort}
						/>
					</div>
					<input type='text' />
				</form>
			</div>
		</div>
	)
}

export default Control
