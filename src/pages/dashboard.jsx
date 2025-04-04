import { CgProfile } from 'react-icons/cg'
import { FaBlackTie } from 'react-icons/fa'
import { IoIosSchool } from 'react-icons/io'
import { Link } from 'react-router-dom'
import useGetData from '../hooks/Get'

function Dashboard() {
	const { data } = useGetData('/profile/me')

	return (
		<>
			<div className='lg:max-w-[1000px] mx-auto px-[20px] py-[30px]'>
				<h2 className='text-primary text-[48px] font-bold'>Dashboard</h2>
				<p className='text-[24px]'> Welcome {data?.user.name}</p>
			</div>

			<div className='lg:max-w-[1000px] mx-auto px-[20px] flex gap-[20px] text-[20px] flex-col md:flex-row'>
				<Link
					to='/addProfil'
					className='px-[21px] py-[8px]  bg-gray-300 text-white rounded-[4px] flex gap-[10px] items-center'
				>
					<CgProfile className='text-primary' /> Edit Profile
				</Link>
				<Link
					to='/AddExperience'
					className='px-[21px] py-[8px] bg-gray-300 text-white rounded-[4px] flex gap-[10px] items-center'
				>
					<FaBlackTie className='text-primary' /> Add Experience
				</Link>
				<Link
					to='/AddEducation'
					className='px-[21px] py-[8px] bg-gray-300 text-white rounded-[4px] flex gap-[10px] items-center'
				>
					<IoIosSchool className='text-primary' /> Add Education
				</Link>
			</div>
		</>
	)
}

export default Dashboard
