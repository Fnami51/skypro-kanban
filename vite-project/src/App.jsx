import {Route, Routes} from 'react-router-dom';
import './App.css'
import MainPage from './pages/MainPage/MainPage.jsx'
import Login from './pages/LoginPage/Login.jsx'
import Registr from './pages/RegistrPage/Registr.jsx'

function App() {

  return (
	<Routes>
		<Route path={'/'} element={<MainPage />}></Route>
		<Route path={'/login'} element={<Login />}></Route>
		<Route path={'/registr'} element={<Registr />}></Route>
	</Routes>
  )
}

export default App

