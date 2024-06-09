import {Route, Routes} from 'react-router-dom';
import './color.css'
import MainPage from './pages/MainPage/MainPage.jsx'
import Login from './pages/LoginPage/Login.jsx'
import Registr from './pages/RegistrPage/Registr.jsx'
import Exit from './pages/ExitPage/Exit.jsx'
import PopBrowse from './components/PopBrowse.jsx';
import PopNewCard from './components/PopNewCard.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';
import NotFound from './pages/NotFoundPage/NotFound.jsx';
import useAuth from './hooks/useAuth.js';



function App() {
  const {user} = useAuth();
  const isAuth = user.token ? true : false;

// const [cards, setCards] = useState([]);

/*
  useEffect(() => {  
	getCards(localStorage.getItem("token"))
	.then(data => { 
		setCards(data.tasks); 
		console.log(data.tasks); })
		.catch(error => { 
			console.log('Error', error); 
		}); }, []);
*/

  return (
	<Routes>
		<Route element={<PrivateRoute isAuth={isAuth} />}>
			<Route path={'/'} element={<MainPage />}>
				<Route path={'/exit'} element={<Exit />}></Route>
				<Route path={'/card/:cardId'} element={<PopBrowse />}></Route>
				<Route path={'/newcard'} element={<PopNewCard />}></Route>
			</Route>
		</Route>
		<Route path={'/login'} element={<Login />}></Route>
		<Route path={'/registr'} element={<Registr />}></Route>
		<Route path={'/*'} element={<NotFound />}></Route>
	</Routes>
  )
}

export default App

