import {Route, Routes} from 'react-router-dom';
import './App.css'
import MainPage from './pages/MainPage/MainPage.jsx'
import Login from './pages/LoginPage/Login.jsx'
import Registr from './pages/RegistrPage/Registr.jsx'
import Exit from './pages/ExitPage/Exit.jsx'
import PopBrowse from './components/PopBrowse.jsx';
import PopNewCard from './components/PopNewCard.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';
import NotFound from './pages/NotFoundPage/NotFound.jsx';
import { UserProvider} from './components/UserContext.jsx';
import { useState } from 'react'
import { cardList } from './components/data.js';



function App() {
	console.log(localStorage.getItem("token"))
  const isAuth = Boolean(localStorage.getItem("token"));
  console.log(isAuth)

  const [cards, setCards] = useState(cardList);

	function onCardAdd() {
        setCards((prevCards) => {
            return [...prevCards, {
                id: cardList.length + 1,
                topic: "Web Design",
                title: "Название задачи",
                date: "30.10.23",
                status: "Без статуса",
            }]
        });
    }
  
  return (
	<UserProvider>
	<Routes>
		<Route element={<PrivateRoute isAuth={isAuth} />}>
			<Route path={'/'} element={<MainPage cards={cards}/>}>
				<Route path={'/exit'} element={<Exit />}></Route>
				<Route path={'/card/:cardId'} element={<PopBrowse />}></Route>
				<Route path={'/newcard'} element={<PopNewCard onCardAdd={onCardAdd}/>}></Route>
			</Route>
		</Route>
		<Route path={'/login'} element={<Login />}></Route>
		<Route path={'/registr'} element={<Registr />}></Route>
		<Route path={'/*'} element={<NotFound />}></Route>
	</Routes>
	</UserProvider>
  )
}

export default App

