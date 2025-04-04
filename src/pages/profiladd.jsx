import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useGetData from '../hooks/Get'
import usePostData from '../hooks/Post'

function AddPofil() {
	const [status, statusSet] = useState('')
	const [company, companySet] = useState('')
	const [location, locationSet] = useState('')
	const [website, websiteSet] = useState('')
	const [skills, skillsSet] = useState('')
	const [githubusername, gitHubSet] = useState('')
	const [bio, bioSet] = useState('')

	const navigate = useNavigate()

	const { postData } = usePostData(`/profile`)
	const SubmitText = async event => {
		event.preventDefault()
		await postData({
			status,
			company,
			location,
			website,
			skills,
			githubusername,
			bio,
		})
		navigate('/dashboard')
	}

	const { data } = useGetData('/profile/me')

	return (
		<>
			<div className='lg:max-w-[1000px] mx-auto px-[20px] py-[30px]'>
				<h2 className='text-primary text-[48px] font-bold'>
					Create Your Profile
				</h2>
				<p className='text-[24px]'> Let's get some information to make your</p>
				<p className='py-[10px]'>
					You have not yet setup a profile, please add some info
				</p>
			</div>

			<form
				action=''
				onSubmit={SubmitText}
				className='lg:max-w-[1000px] mx-auto px-[20px] py-[50px]'
			>
				<select
					className='w-full border-gray-300 border-[1px] border-solid py-[7px] px-[10px] outline-none '
					name=''
					id=''
					onChange={e => {
						statusSet(e.target.value)
					}}
				>
					<option value='Developer'>Developer</option>
					<option value='Junior_Developer'>Junior Developer</option>
					<option value='Senior_Developer'>Senior Developer</option>
					<option value='Manager'>Manager</option>
					<option value='Student_or_Learning'>Student or Learning</option>
					<option value='Instructor_or_Teacher'>Instructor or Teacher</option>
					<option value='Intern'>Intern</option>
					<option value='Other'>Other</option>
				</select>
				<br />

				<label htmlFor=''>
					<input
						className='border-gray-300 border-[1px] border-solid py-[7px] px-[10px] w-full mt-[20px]'
						type='text'
						placeholder='Company'
						value={data?.company}
						onChange={e => {
							companySet(e.target.value)
						}}
					/>
					<p className='mb-[20px] text-[12px] text-gray-400'>
						Could be your own company or one you work for
					</p>
				</label>

				<label htmlFor=''>
					<input
						className='border-gray-300 border-[1px] border-solid py-[7px] px-[10px] w-full'
						type='text'
						placeholder='Website'
						value={data?.website}
						onChange={e => {
							websiteSet(e.target.value)
						}}
					/>
					<p className='mb-[20px] text-[12px] text-gray-400'>
						Could be your own or a company website
					</p>
				</label>

				<label htmlFor=''>
					<input
						className='border-gray-300 border-[1px] border-solid py-[7px] px-[10px] w-full'
						type='text'
						placeholder='Location'
						value={data?.location}
						onChange={e => {
							locationSet(e.target.value)
						}}
					/>
					<p className='mb-[20px] text-[12px] text-gray-400'>
						City & state suggested (eg. Boston, MA)
					</p>
				</label>

				<label htmlFor=''>
					<input
						className='border-gray-300 border-[1px] border-solid py-[7px] px-[10px] w-full'
						type='text'
						placeholder='Skills'
						value={data?.skills}
						onChange={e => {
							skillsSet(e.target.value)
						}}
					/>
					<p className='mb-[20px] text-[12px] text-gray-400'>
						Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)
					</p>
				</label>

				<label htmlFor=''>
					<input
						className='border-gray-300 border-[1px] border-solid py-[7px] px-[10px] w-full'
						type='text'
						placeholder='GitHub userName'
						value={data?.website}
						onChange={e => {
							gitHubSet(e.target.value)
						}}
					/>
					<p className='mb-[20px] text-[12px] text-gray-400'>
						If you want your latest repos and a Github link, include your
						username
					</p>
				</label>

				<label htmlFor='' className=''>
					<input
						className='border-gray-300 border-[1px] border-solid py-[7px] px-[10px] w-full'
						type='text'
						placeholder='bio'
						value={data?.bio}
						onChange={e => {
							bioSet(e.target.value)
						}}
					/>
					<p className='mb-[20px] text-[12px] text-gray-400'>
						Tell us a little about yourself
					</p>
				</label>

				<button className='px-[21px] py-[7px] bg-primary text-white rounded-[4px] mr-[20px]'>
					Save
				</button>
				<Link
					className='px-[21px] py-[8px] bg-gray-300 text-white rounded-[4px]'
					to='/CreatProfil'
				>
					Go Back
				</Link>
			</form>
		</>
	)
}

export default AddPofil
