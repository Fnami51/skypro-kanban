import { useEffect, useState } from 'react'
import '../../App.css'
import PopNewCard from '../../components/PopNewCard.jsx'
import PopBrowse from '../../components/PopBrowse.jsx'
import Header from '../../components/Header.jsx'
import Main from '../../components/Main.jsx'
import Loading from '../../components/Loading.jsx'
import { cardList } from '../../components/data.js'

function MainPage() {
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

	const [isLoading, setIsLoading] = useState(true); //DEMO
	function changeLoadingState() {setIsLoading(false)} //DEMO

	useEffect(() => {
		setTimeout(changeLoadingState, 2000)
	}, []);

  return (
    <div className="wrapper">
		
			<div className="pop-exit" id="popExit">
				<div className="pop-exit__container">
					<div className="pop-exit__block">
						<div className="pop-exit__ttl">
							<h2>Выйти из аккаунта?</h2>
						</div>
						<form className="pop-exit__form" id="formExit" action="#">
							<div className="pop-exit__form-group">
								<button className="pop-exit__exit-yes _hover01" id="exitYes"><a href="modal/signin.html">Да, выйти</a> </button>
								<button className="pop-exit__exit-no _hover03" id="exitNo"><a href="main.html">Нет, остаться</a> </button>
							</div>
						</form>
					</div>
				</div>
			</div>

	<PopNewCard onCardAdd={onCardAdd}/>

	<PopBrowse />

    <Header />
		
	{isLoading ? <Loading/> : <Main cards={cards} isLoading={isLoading}/>}
    </div>
  )
}

export default MainPage;