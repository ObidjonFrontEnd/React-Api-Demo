import React, { useContext, useState } from 'react'
import { FaUser } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import axios from '../axios/axios'
import { AppContext } from '../context/ContexApi'

function Login() {
	const { langth, isTokenSet, them, isToken } = useContext(AppContext)
	const [isError, isErrorSet] = useState(false)
	const [email, emailSet] = useState('')
	const [password, passwordSet] = useState('')
	const [error, setError] = useState(null)
	const [loading , loadingSet] = useState(false)
	const navigate = useNavigate()

	setTimeout(() => {
		if (isToken) {
			return navigate('/')
		}
	}, 0)

	function Submit(event) {
		event.preventDefault()
		loadingSet(true)
		axios
			.post('/api/auth', {
				email,
				password,
			})
			.then(res => {
				const apiData = res.data
				if (apiData.token && apiData.token.trim() != '') {
					localStorage.setItem('token', apiData.token)
					isTokenSet(true)
					navigate('/dashboard')

				}
			})
			.catch(error => {
				setError(error.response.data.errors[0].msg)
				isErrorSet(true)
				loadingSet(false)
			})
	}

	return (
		<div className=' relative '>
			<div
				style={{
					backgroundColor: them ? 'white' : '#293133',
					color: them ? 'black' : 'white',
				}}
				className='bg-white w-full px-[20px] md:px-[60px] h-[calc(100vh-70px)] pt-[30px] relative'
			>
				<form action='' onSubmit={Submit}>
					<h2 className='text-primary text-[48px] font-bold mb-[16px]'>
						{langth ? 'Login' : `Tizimga kirish`}
					</h2>
					<h2 className='flex gap-[10px] items-center text-[24px] mb-[16px]'>
						<FaUser />{' '}
						{langth ? 'Sign Into Your Account' : `Hisobingizga kiring`}
					</h2>

					<label htmlFor=''>
						<input
							type='email'
							placeholder='Email'
							className='border-[1px] border-solid border-gray-400 text-black w-full p-[7px] text-[20px]'
							onChange={value => emailSet(value.target.value)}
						/>
					</label>

					<label htmlFor=''>
						<input
							type='password'
							placeholder='password'
							className='border-[1px] border-solid border-gray-400 text-black w-full p-[7px] text-[20px] my-[20px]'
							onChange={value => passwordSet(value.target.value)}
						/>
					</label>

					<button className='px-[21px] py-[7px] bg-primary rounded-[8px] text-[16px] text-white mb-[20px]'>
						{langth ? 'Login' : `Tizimga kirish`}
					</button>

					<p className='text-[16px]'>
						{langth ? `Don't have an account?` : `Hisobingiz yo'qmi?`}{' '}
						<Link to='/registration' className='text-primary '>
							{langth ? 'Registration' : `Tizimga kirish`}
						</Link>
					</p>
				</form>

				<div
					className={`${
						isError ? 'scale-1' : 'scale-0'
					} flex justify-center items-center rounded-[4px] duration-[1s] absolute top-[50px] right-[50px] bg-red-600 text-white font-bold w-[200px] h-[80px]`}
				>
					<h1>{error}</h1>
				</div>
			</div>

			<div
				className={`${
					loading ? 'flex' : 'hidden'
				} items-center justify-center h-screen fixed inset-0 bg-slate-400/75`}
			>
				<div className='w-24 h-24 border-4 border-t-blue-500 border-gray-300 rounded-full animate-spin'></div>
			</div>
		</div>
	)
}

export default Login
