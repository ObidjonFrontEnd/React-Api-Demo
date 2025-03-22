import { useContext, useEffect } from 'react'
import { AppContext } from '../context/ContexApi'
import { useNavigate } from 'react-router-dom'

function Dashboard() {
  const { isToken } = useContext(AppContext)
  const navigate = useNavigate()

    useEffect(()=>{
      console.log(isToken);
      
        if(!isToken){
          return navigate('/login')
        }
    },[])

  return (

    <>
				<h1>Dashboard</h1>
    </>
  )
}

export default Dashboard
