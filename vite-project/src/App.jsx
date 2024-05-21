import {Route, Routes} from 'react-router-dom';
import './App.css'
import MainPage from './pages/MainPage/MainPage.jsx'
import Login from './pages/LoginPage/Login.jsx'
import Registr from './pages/RegistrPage/Registr.jsx'
import Exit from './pages/ExitPage/Exit.jsx'
import PopBrowse from './components/PopBrowse.jsx';

function App() {

  return (
	<Routes>
		
		<Route path={'/'} element={<MainPage />}></Route>
		<Route path={'/login'} element={<Login />}></Route>
		<Route path={'/registr'} element={<Registr />}></Route>
		<Route path={'/exit'} element={<Exit />}></Route>
		<Route path={'/card/:cardId'} element={<PopBrowse />}></Route>
	</Routes>
  )
}

export default App

