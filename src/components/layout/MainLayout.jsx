import { Outlet } from 'react-router-dom'
import Footer from '../header&Footer/footer'
import Header from '../header&Footer/header'

function MainLayaout() {
	return (
		<>
			<Header/>

			<div className='mt-[70px]'>
				<Outlet />
			</div>

			<Footer />
		</>
	)
}

export default MainLayaout
