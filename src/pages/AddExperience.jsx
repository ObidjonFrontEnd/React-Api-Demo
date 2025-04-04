import { useState } from 'react'
import { Link } from 'react-router-dom'
import useUpdateData from '../hooks/put'

function AddExperience() {
	
	const [title, titleSet] = useState('')
	const [company, companySet] = useState('')
	const [location, locationSet] = useState('')
	const [from, fromSet] = useState('')
	const [to, toSet] = useState('')
	const [description, descriptionSet] = useState('')

	const { updateData } = useUpdateData('/profile/experience')

	const handleUpdate = async userId => {
		await updateData(userId)
	}

	return (
		<>
			<div className='lg:max-w-[1000px] mx-auto px-[20px] py-[30px]'>
				<h2 className='text-primary text-[48px] font-bold'>
					Add An Experience
				</h2>
				<p className='text-[24px]'>
					Add any developer/programming positions that you have had in the past{' '}
				</p>
			</div>

			<form
				onSubmit={handleUpdate}
				action=''
				className='lg:max-w-[1000px] mx-auto px-[20px]'
			>
				<label htmlFor=''>
					<input
						type='text'
						placeholder='* Job Title'
						className='w-full outline-none py-[5px] px-[10px] border-gray-400 border-[1px] border-solid rounded-[4px] mb-[20px]'
						onChange={e => titleSet(e.target.value)}
					/>
				</label>

				<label htmlFor=''>
					<input
						type='text'
						placeholder='* Company'
						className='w-full outline-none py-[5px] px-[10px] border-gray-400 border-[1px] border-solid rounded-[4px] mb-[20px]'
						onChange={e => companySet(e.target.value)}
					/>
				</label>

				<label htmlFor=''>
					<input
						type='text'
						placeholder='Location'
						className='w-full outline-none py-[5px] px-[10px] border-gray-400 border-[1px] border-solid rounded-[4px] mb-[20px]'
						onChange={e => locationSet(e.target.value)}
					/>
				</label>

				<label htmlFor=''>
					<p className='font-bold'>From Date</p>
					<input
						type='date'
						className='w-full outline-none py-[5px] px-[10px] border-gray-400 border-[1px] border-solid rounded-[4px] mb-[20px]'
						onChange={e => fromSet(e.location.value)}
					/>
				</label>

				<label htmlFor=''>
					<p className='font-bold'>To Date</p>
					<input
						type='date'
						className='w-full outline-none py-[5px] px-[10px] border-gray-400 border-[1px] border-solid rounded-[4px] mb-[20px]'
						onChange={e => toSet(e.location.value)}
					/>
				</label>

				<label htmlFor=''>
					<input
						type='text'
						placeholder='Job Description'
						className='w-full outline-none py-[5px] px-[10px] border-gray-400 border-[1px] border-solid rounded-[4px] mb-[20px]'
						onChange={e => descriptionSet(e.target.value)}
					/>
				</label>

				<button className='px-[21px] py-[7px] bg-primary text-white rounded-[4px] mr-[20px]'>
					Save
				</button>
				<Link
					className='px-[21px] py-[8px] bg-gray-300 text-white rounded-[4px]'
					to='/dashboard'
				>
					Go Back
				</Link>
			</form>
		</>
	)
}

export default AddExperience
