import { Link } from 'react-router-dom'

function Home() {
	return (
		<>
			<div className=" relative bg-[url('/images/bg.jpg')] w-full h-[calc(100vh-70px)] bg-cover">
        <div className="absolute inset-0 bg-black/50"></div>
          <div className="flex h-full w-full items-center justify-center gap-[16px] text-white flex-col relative z-30 px-[20px]">

            <h1 className='text-[30px] sm:text-[44px] md:text-[64px] text-center'>Developer Connector</h1>
            <h2 className=' text-[20px] md:text-[24px] text-center'>Create a developer profile/portfolio, share posts and get help from other developers</h2>

            <div className="flex gap-[20px]">
              <Link to='/registration' className='px-[21px] py-[7px] bg-primary rounded-[8px] text-[16px]'>Register</Link>
              <Link to='/login' className='px-[21px] py-[7px] bg-white rounded-[8px] text-[16px] text-black'>Login</Link>

            </div>

          </div>

      </div>
		</>
	)
}

export default Home
