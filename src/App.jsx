import { useContext } from 'react'
import { Navigate, Route, HashRouter as Router, Routes } from 'react-router-dom'
import MainLayaout from './components/layout/MainLayout'
import { AppContext } from './context/ContexApi'
import NotFoundPage from './pages/404'
import AddEducation from './pages/AddEducation'
import AddExperience from './pages/AddExperience'
import Home from './pages/Home'
import CreatProfil from './pages/creatProfil'
import Dashboard from './pages/dashboard'
import Developers from './pages/developers'
import Login from './pages/login'
import PostData from './pages/post'
import Post from './pages/posts'
import Profil from './pages/profil'
import AddPofil from './pages/profiladd'
import Registration from './pages/registration'

function App() {
	const { isToken } = useContext(AppContext)

	function isAuth() {
		return localStorage.getItem('token') !== null
	}
	function ProtateRoute({ children }) {
		return isAuth() ? children : <Navigate to='/login' />
	}
	function NoProtateRoute({ children }) {
		return isAuth() ? <Navigate to='/dashboard' /> : children
	}

	return (
		<>
			<Router>
				<Routes>
					<Route element={<MainLayaout />}>
						<Route path='/' element={isToken ? <Developers /> : <Home />} />
						<Route path='/developers' element={<Developers />} />
						<Route path='/profile/:id' element={<Profil />} />
						<Route
							path='/login'
							element={
								<NoProtateRoute>
									<Login />
								</NoProtateRoute>
							}
						/>
						<Route
							path='/registration'
							element={
								<NoProtateRoute>
									<Registration />
								</NoProtateRoute>
							}
						/>

						<Route
							path='/dashboard'
							element={
								<ProtateRoute>
									<Dashboard />
								</ProtateRoute>
							}
						/>
						<Route
							path='/post'
							element={
								<ProtateRoute>
									<Post />
								</ProtateRoute>
							}
						/>
						<Route
							path='/post/:id'
							element={
								<ProtateRoute>
									<PostData />
								</ProtateRoute>
							}
						/>
						<Route
							path='/CreatProfil'
							element={
								<ProtateRoute>
									<CreatProfil />
								</ProtateRoute>
							}
						/>
						<Route
							path='/addProfil'
							element={
								<ProtateRoute>
									<AddPofil />
								</ProtateRoute>
							}
						/>

						<Route
							path='/AddExperience'
							element={
								<ProtateRoute>
									<AddExperience />
								</ProtateRoute>
							}
						/>

						<Route
							path='/AddEducation'
							element={
								<ProtateRoute>
									<AddEducation />
								</ProtateRoute>
							}
						/>
					</Route>
					<Route path='*' element={<NotFoundPage />} />
				</Routes>
			</Router>
		</>
	)
}

export default App
