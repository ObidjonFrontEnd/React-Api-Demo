import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaCheck } from "react-icons/fa";
import { AppContext } from '../context/ContexApi'

function Developers() {

  const { them } = useContext(AppContext)
  
  const [profil , profilSet] = useState([])
  useEffect(()=>{
    axios.get('https://nt-devconnector.onrender.com/api/profile').then((res)=>profilSet(res.data))
  },[])
  
 
  
  return (
    <div style={{backgroundColor:them? 'white' : '#293133' , color:them? "black":"white"}}  className='md:px-[40px] px-[20px]'>
      <div className="py-[30px]">
        <h2 className=' text-primary text-[48px] font-bold'>Developers</h2>
        <p className='text-[24px]'>Browse and connect with developers</p>
      </div>
			<div className="flex flex-col gap-[20px]">
      {
        profil.map((obj , index)=>{
            return (
              <div key={index} className="bg-[#f4f4f4] flex items-center justify-between p-[20px] rounded-[8px] border-solid border-[1px] border-gray-300 w-full lg:max-w-[1000px] lg:min-w-[1000px] mx-auto overflow-hidden ">
                
                <div className="flex items-center gap-[50px] flex-col md:flex-row justify-center w-full md:w-fit">
                    <div className="min-W-[170px] h-[170px] mx-auto">
                        <img src={obj.user.avatar} className='rounded-[50%] w-full h-full' alt="" />
                    </div>

                    <div className="flex flex-col gap-[10px] items-center md:items-start text-black ">
                      <h1 className='font-bold text-[20px] text-wrap'>{obj.user.name}</h1>
                      <h1>{obj.company}</h1>
                      <h1>{obj.location}</h1>
               
                      <Link to={`/profile/${obj.user._id}`} className='bg-primary px-[20px] py-[7px] rounded-[4px] text-white'>
                          View Profile
                      </Link>
                    </div>
                </div>

                <div className="text-primary md:flex gap-[5px] items-center hidden text-wrap">
                  <FaCheck />
                  <h1>{obj.skills}</h1>
                </div>
              </div>
            )
        })
        }
      </div>
    </div>
  )
}

export default Developers
