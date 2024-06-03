import '../App.css'
import Calendar from './Calendar.jsx';
import { postCards } from './api.js';
import useTasks from '../hooks/useTasks.js';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



function PopNewCard() {
    let navigate = useNavigate();
    const {setTasks} = useTasks()

    const {selected, setSelected} = useState(null)

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
    date: selected})

    return <div className="pop-new-card" id="popNewCard">
    <div className="pop-new-card__container">
        <div className="pop-new-card__block">
            <div className="pop-new-card__content">
                <h3 className="pop-new-card__ttl">Создание задачи</h3>
                <Link to={'/'} className="pop-new-card__close">&#10006;</Link>
                <div className="pop-new-card__wrap">
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
                            
                            <Calendar selected={selected} setSelected={setSelected}/>
                            
                            <input type="hidden" id="datepick_value" value="08.09.2023"/>
                            <div className="calendar__period">
                                <p className="calendar__p date-end">Выберите срок исполнения <span className="date-control"></span>.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pop-new-card__categories categories">
                    <p className="categories__p subttl">Категория</p>
                    <div className="categories__themes">
                        <div className="categories__theme _orange _active-category">
                            <input type="radio" name="topic" value="Web Design" onChange={() => setTask({...task, topic : "Web Design"})} className="_orange"/><label className="_orange">Web Design</label>
                        </div>
                        <div className="categories__theme _green">
                            <input type="radio" name="topic" value="Research" onChange={() => setTask({...task, topic : "Research"})} className="_green"/><label className="_green">Research</label>
                        </div>
                        <div className="categories__theme _purple">
                            <input type="radio" name="topic" value="Copywriting" onChange={() => setTask({...task, topic : "Copywriting"})} className="_purple"/><label className="_purple">Copywriting</label>
                        </div>
                    </div>
                </div>
                <button onClick={onCardAdd} className="form-new__create _hover01" id="btnCreate">Создать задачу</button>
            </div>
        </div>
    </div>
</div>;
  }
 
  export default PopNewCard;