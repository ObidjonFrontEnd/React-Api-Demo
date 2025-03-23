import { useContext } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import MainLayaout from './components/layout/MainLayout'
import { AppContext } from './context/ContexApi'
import Home from './pages/Home'
import Dashboard from './pages/dashboard'
import Developers from './pages/developers'
import Login from './pages/login'
import PostData from './pages/post'
import Post from './pages/posts'
import Registration from './pages/registration'
import Profil from './pages/profil'

function App() {
	const { isToken } = useContext(AppContext)

	return (
		<>
			<Router>
				<Routes>
					<Route element={<MainLayaout />}>
						<Route path='/' element={isToken ? <Developers /> : <Home />} />
						<Route path='/login' element={<Login />} />
						<Route path='/registration' element={<Registration />} />
						<Route path='/developers' element={<Developers />} />
						<Route path='/dashboard' element={<Dashboard />} />
						<Route path='/post' element={<Post />} />
						<Route path='/post/:id' element={<PostData />} />
						<Route path='/profile/:id' element={<Profil/>} />
					</Route>
				</Routes>
			</Router>
		</>
	)
}

export default App
