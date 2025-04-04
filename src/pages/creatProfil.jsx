import { Link } from 'react-router-dom'
import useGetData from '../hooks/Get'

function CreatProfil() {
	const { data } = useGetData('/profile/me')

	return (
		<>
			<div className='lg:max-w-[1000px] mx-auto px-[20px] py-[30px]'>
				<h2 className='text-primary text-[48px] font-bold'>Dashboard</h2>
				<p className='text-[24px]'> Welcome {data?.user.name}</p>
				<p className='py-[10px]'>
					You have not yet setup a profile, please add some info
				</p>
				<Link to='/addProfil'>
					<button className='px-[21px] py-[7px] bg-primary text-white rounded-[4px]'>
						Create Profile
					</button>
				</Link>
			</div>
		</>
	)
}

export default CreatProfil
