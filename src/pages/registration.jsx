import axios from 'axios'
import React, { useContext, useState } from 'react'
import { FaUser } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/ContexApi'

function Registration() {
	const { langth, isTokenSet , them } = useContext(AppContext)

	const [name, nameSet] = useState('')
	const [email, emailSet] = useState('')
	const [password, passwordSet] = useState('')

	const navigate = useNavigate()

	function Submit(event) {
		event.preventDefault()
		axios
			.post('https://nt-devconnector.onrender.com/api/users', {
				name,
				email,
				password,
			})
			.then(res => {
				localStorage.setItem('token', res.data.token)
				navigate('/dashboard')
				isTokenSet(true)
			})
	}

	return (
		<>
			<div style={{backgroundColor:them? 'white' : '#293133' , color:them? "black":"white"}} className='bg-white w-full px-[20px] md:px-[60px] h-[calc(100vh-70px)] pt-[30px] absolute'>
				<form action='' onSubmit={Submit}>
					<h2 className='text-primary text-[48px] font-bold mb-[16px]'>
						{langth ? 'Registration' : 'Roʻyxatdan oʻtish'}
					</h2>
					<h2 className='flex gap-[10px] items-center text-[24px] mb-[16px]'>
						<FaUser />{' '}
						{langth ? 'Create Your Account' : 'Hisobingizni yarating'}
					</h2>

					<label htmlFor='' className=''>
						<input
							type='text'
							placeholder='Name'
							className='border-[1px] border-solid text-black border-gray-400 w-full p-[7px] text-[20px] mb-[20px]'
							onChange={value => nameSet(value.target.value)}
						/>
					</label>

					<label htmlFor=''>
						<input
							type='email'
							placeholder='Email'
							className='border-[1px] border-solid text-black border-gray-400 w-full p-[7px] text-[20px]'
							onChange={value => emailSet(value.target.value)}
						/>
						<span className='text-[15px]  mb-[20px]'>
							{langth
								? `This site uses Gravatar so if you want a profile image, use a
							Gravatar email`
								: `Ushbu sayt Gravatar dasturidan foydalanadi, shuning uchun agar siz profil tasvirini olishni istasangiz, a
 Gravatar elektron pochta`}
						</span>
					</label>

					<label htmlFor=''>
						<input
							type='password'
							placeholder='password'
							className='border-[1px] border-solid text-black border-gray-400 w-full p-[7px] text-[20px] my-[20px]'
							onChange={value => passwordSet(value.target.value)}
						/>
					</label>

					<button className='px-[21px] py-[7px] bg-primary rounded-[8px] text-[16px] text-white mb-[20px]'>
						{langth ? 'Registration' : `Ro'yxatdan o'tish`}
					</button>

					<p className='text-[16px]'>
					{langth ? 'Already have an account?' : `Hisobingiz bormi?`}{' '}
						<Link to='/login' className='text-primary '>
						{langth ? 'Login' : `Tizimga kirish`}
						</Link>
					</p>
				</form>

				{<div className='relative top-0 right-0'></div>}
			</div>
		</>
	)
}

export default Registration
