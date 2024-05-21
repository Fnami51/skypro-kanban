import { useEffect, useState } from 'react'
import '../../App.css'
import { Wrapper } from '../style_pages/Login.styled.js'
import Header from '../../components/Header.jsx'
import Main from '../../components/Main.jsx'
import Loading from '../../components/Loading.jsx'
import { cardList } from '../../components/data.js'
import { Outlet } from 'react-router-dom'

function MainPage() {
	const [cards, setCards] = useState(cardList);

	/*function onCardAdd() {
        setCards((prevCards) => {
            return [...prevCards, {
                id: cardList.length + 1,
                topic: "Web Design",
                title: "Название задачи",
                date: "30.10.23",
                status: "Без статуса",
            }]
        });
    }*/

	const [isLoading, setIsLoading] = useState(true); //DEMO
	function changeLoadingState() {setIsLoading(false)} //DEMO

	useEffect(() => {
		setTimeout(changeLoadingState, 2000)
	}, []);

  return (
    <Wrapper>

    <Outlet />

    <Header />
		
	{isLoading ? <Loading/> : <Main cards={cards} isLoading={isLoading}/>}
    </Wrapper>
  )
}

export default MainPage;