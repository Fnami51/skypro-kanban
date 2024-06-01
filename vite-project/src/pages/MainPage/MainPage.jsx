import { useEffect, useState } from 'react'
import '../../App.css'
import { Wrapper } from '../style_pages/Login.styled.js'
import Header from '../../components/Header.jsx'
import Main from '../../components/Main.jsx'
import Loading from '../../components/Loading.jsx'
import { Outlet } from 'react-router-dom'
import { getCards } from '../../components/api.js'
import useTasks from '../../hooks/useTasks.js'

function MainPage() {

  const {tasks, setTasks} = useTasks()

	const [isLoading, setIsLoading] = useState(true); //DEMO
	function changeLoadingState() {setIsLoading(false)} //DEMO

	useEffect(() => {
		setTimeout(changeLoadingState, 2000)
	}, []);

  useEffect(() => {  
    getCards(localStorage.getItem("token"))
    .then(data => { 
      setTasks(data.tasks); 
      console.log(data.tasks); })
      .catch(error => { 
        console.log('Error', error); 
      }); }, []);

  return (
    <Wrapper>

    <Outlet />

    <Header />
		
	{isLoading ? <Loading/> : <Main cards={tasks} isLoading={isLoading}/>}
    </Wrapper>
  )
}

export default MainPage;