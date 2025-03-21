import axios from 'axios'
import React, { useContext, useState } from 'react'
import { FaUser } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/ContexApi'


function Login() {
  const { langth, isTokenSet , them } = useContext(AppContext)

	const [email, emailSet] = useState('')
	const [password, passwordSet] = useState('')

	const navigate = useNavigate()

	function Submit(event) {
		event.preventDefault()
		axios
			.post('https://nt-devconnector.onrender.com/api/auth', {
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
			<div style={{backgroundColor:them? 'white' : '#293133' , color:them? "black":"white"}}  className='bg-white w-full px-[20px] md:px-[60px] h-[calc(100vh-70px)] pt-[30px]'>
				<form action='' onSubmit={Submit}>
					<h2 className='text-primary text-[48px] font-bold mb-[16px]'>
            {langth ? 'Login' : `Tizimga kirish`}
					</h2>
					<h2 className='flex gap-[10px] items-center text-[24px] mb-[16px]'>
						<FaUser /> {langth ? 'Sign Into Your Account' : `Hisobingizga kiring`}
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
			</div>
		</>
	)
}

export default Login
