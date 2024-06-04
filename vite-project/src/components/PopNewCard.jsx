import '../App.css'
import Calendar from './Calendar.jsx';
import { postCards } from './api.js';
import useTasks from '../hooks/useTasks.js';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import useDate from '../hooks/useDate.js';
import * as nc from './style_components/PopNewCard.styled.js'
import * as categories from './style_components/Categories.styled.js'


function PopNewCard() {
    let navigate = useNavigate();
    const {setTasks} = useTasks()
    const {dateInContext} = useDate();


    function onCardAdd() {
        postCards(localStorage.getItem("token"), task.title, task.topic, task.status, task.description, task.date)
		.then(data => { 
			setTasks(data.tasks);
            navigate('/');
		})
		.catch(error => { 
			console.log('Error', error); 
		});
    }

const [task, setTask] = useState({
    title: "", 
    topic: "Research", 
    status: "Без статуса", 
    description: "", 
    date: dateInContext})

    return <nc.Background id="popNewCard">
    <nc.Container>
        <nc.Block>
            <nc.Content>
                <nc.Title>Создание задачи</nc.Title>
                <Link to={'/'} className="pop-new-card__close">&#10006;</Link>
                <nc.Wrap>
                    <form className="pop-new-card__form form-new" id="formNewCard" action="#">
                        <div className="form-new__block">
                            <label htmlFor="formTitle" className="subttl">Название задачи</label>
                            <input className="form-new__input" type="text" name="title" id="formTitle" onChange={e => setTask({...task, title: e.target.value})} placeholder="Введите название задачи..." autoFocus/>
                        </div>
                        <div className="form-new__block">
                            <label htmlFor="textArea" className="subttl">Описание задачи</label>
                            <textarea className="form-new__area" name="description" id="textArea" onChange={e => setTask({...task, description: e.target.value})}  placeholder="Введите описание задачи..."></textarea>
                        </div>
                    </form>
                    <div className="pop-new-card__calendar calendar">
                        <p className="calendar__ttl subttl">Даты</p>									
                        <div className="calendar__block">
                            
                            <Calendar/>
                            
                            <input type="hidden" id="datepick_value" value={dateInContext}/>
                        </div>
                    </div>
                </nc.Wrap>
                <categories.Background>
                    <categories.Title>Категория</categories.Title>
                    <categories.ThemeBox>
                    
                            <input type="radio" name="topic" id="input--web_design" value="Web Design" onChange={() => setTask({...task, topic : "Web Design"})} style={{display: "none"}}/>
                            <categories.Theme className="_orange" htmlFor="input--web_design">
                                Web Design
                            </categories.Theme>
                    
                            <input type="radio" name="topic" id="input--research" value="Research" onChange={() => setTask({...task, topic : "Research"})} style={{display: "none"}}/>
                            <categories.Theme className="_green" htmlFor="input--research">
                                Research
                            </categories.Theme>
                    
                            <input type="radio" name="topic" id="input--copywriting" value="Copywriting" onChange={() => setTask({...task, topic : "Copywriting"})} style={{display: "none"}}/>
                            <categories.Theme className="_purple" htmlFor="input--copywriting">
                                Copywriting
                            </categories.Theme>
                    
                    </categories.ThemeBox>
                </categories.Background>
                <button onClick={onCardAdd} className="form-new__create _hover01" id="btnCreate">Создать задачу</button>
            </nc.Content>
        </nc.Block>
    </nc.Container>
</nc.Background>;
  }
 
  export default PopNewCard;