import React, { useContext, useState } from 'react'
import { FaCode, FaMoon, FaSun, FaUser } from 'react-icons/fa'
import { FaXmark } from 'react-icons/fa6'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdLogout } from 'react-icons/md'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { AppContext } from '../../context/ContexApi'

function Header() {
	const { langth, langhtSet, isToken, isTokenSet, them, themSet } =
		useContext(AppContext)
	const [open, close] = useState(false)

	const navigate = useNavigate()

	function Logout() {
		isTokenSet(false)
		localStorage.removeItem('token')
		navigate('/')
	}

	return (
		<div className='relative overflow-hidden w-full'>
			<div className=' fixed top-0 left-0 w-full z-40'>
				<header className='bg-grayBg w-full h-[70px] flex items-center text-white px-[40px] border-b-solid border-b-[3px] border-b-primary justify-between'>
					<Link
						className='logo flex gap-[10px] text-[1.5em] hover:text-primary duration-[0.3s]  items-center'
						to='/'
					>
						<FaCode />
						<span>DevConnector</span>
					</Link>

					<ul className='hidden md:flex gap-[20px] items-center text-[16px]'>
						<li>
							<button onClick={() => themSet(!them)}>
								{them ? <FaMoon /> : <FaSun />}
							</button>
						</li>
						<li>
							<button onClick={() => langhtSet(!langth)}>
								{langth ? 'En' : 'Uz'}
							</button>
						</li>
						<li className='hover:text-primary duration-[0.3s]'>
							<NavLink to='/developers'>Developers</NavLink>
						</li>

						<li
							style={{ display: isToken ? 'none' : 'block' }}
							className='hover:text-primary duration-[0.3s]'
						>
							<NavLink to='/registration'>Register</NavLink>
						</li>

						<li
							style={{ display: isToken ? 'none' : 'block' }}
							className='hover:text-primary duration-[0.3s]'
						>
							<NavLink to='/login'>Login</NavLink>
						</li>

						<li
							style={{ display: isToken ? 'block' : 'none' }}
							className='hover:text-primary duration-[0.3s]'
						>
							<NavLink to='/post'>Posts</NavLink>
						</li>

						<li
							style={{ display: isToken ? 'block' : 'none' }}
							className='hover:text-primary duration-[0.3s]'
						>
							<NavLink to='/dashboard' className='flex gap-[5px] items-center'>
								<FaUser />
								Dashboard
							</NavLink>
						</li>

						<li
							style={{ display: isToken ? 'block' : 'none' }}
							className='hover:text-primary duration-[0.3s]'
						>
							<button
								type='btn'
								className='flex gap-[5px] items-center'
								onClick={Logout}
							>
								<MdLogout /> Logout
							</button>
						</li>
					</ul>

					<button
						onClick={() => close(!open)}
						className='md:hidden text-[20px] hover:text-primary duration-[0.3s] '
					>
						<GiHamburgerMenu />
					</button>
				</header>
			</div>

			<div
				className={` ${
					open ? '' : 'translate-x-full'
				} nav w-full h-full fixed top-0 bg-black/50 z-50 flex justify-center items-center text-white  duration-[1s]`}
			>
				<ul className=' gap-[30px] items-center text-[25px] justify-center text-center'>
					<li className='hover:text-primary duration-[0.3s]'>
						<NavLink to='/developers'>Developers</NavLink>
					</li>

					<li
						style={{ display: isToken ? 'none' : 'block' }}
						className='hover:text-primary duration-[0.3s]'
					>
						<NavLink to='/registration'>Register</NavLink>
					</li>

					<li
						style={{ display: isToken ? 'none' : 'block' }}
						className='hover:text-primary duration-[0.3s]'
					>
						<NavLink to='/login'>Login</NavLink>
					</li>

					<li
						style={{ display: isToken ? 'block' : 'none' }}
						className='hover:text-primary duration-[0.3s]'
					>
						<NavLink to='/post'>Posts</NavLink>
					</li>

					<li
						style={{ display: isToken ? 'block' : 'none' }}
						className='hover:text-primary duration-[0.3s]'
					>
						<NavLink to='/dashboard' className='flex gap-[5px] items-center'>
							<FaUser />
							Dashboard
						</NavLink>
					</li>

					<li
						style={{ display: isToken ? 'block' : 'none' }}
						className='hover:text-primary duration-[0.3s]'
					>
						<button
							type='btn'
							className='flex gap-[5px] items-center'
							onClick={Logout}
						>
							<MdLogout /> Logout
						</button>
					</li>

					<div className='flex justify-center items-center gap-[15px] mt-[10px]'>
						<li>
							<button onClick={() => themSet(!them)}>
								{them ? <FaMoon /> : <FaSun />}
							</button>
						</li>
						<li>
							<button onClick={() => langhtSet(!langth)}>
								{langth ? 'En' : 'Uz'}
							</button>
						</li>
					</div>
				</ul>

				<div className=' absolute top-[21px] right-[37px] text-white text-[25px]'>
					<FaXmark onClick={() => close(!open)} />
				</div>
			</div>
		</div>
	)
}

export default Header
