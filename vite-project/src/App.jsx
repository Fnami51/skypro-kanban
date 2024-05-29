import React from "react";
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
import { useState } from 'react'
//import { cardList } from './components/data.js';

import { getCards, postCards } from './components/api.js';

const UserContext = React.createContext();

function App() {
  console.log(localStorage.getItem("token"))
  const isAuth = Boolean(localStorage.getItem("token"));

  const [name, setName] = useState({}) //for Context

  const [cards, setCards] = useState(
	getCards(localStorage.getItem("token")).then((data) => {
		return data.tasks;
	}).catch ((error) => {
		console.log('Error', error)
	}));

	function onCardAdd() {
        setCards(() => {
			const newCardList = postCards(localStorage.getItem("token"), ).then((data) => {
				return data.tasks;
			}).catch ((error) => {
				console.log('Error', error)
			});
            return newCardList
        });
    }

	try {
		getCards(localStorage.getItem("token")).then((data) => {
			console.log(data.tasks)
		})
	} catch (error) {
		console.log('Error', error)
	}
  
  return (
	<UserContext.Provider value={{ name, setName }}>
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
	</UserContext.Provider>
  )
}

export default App

