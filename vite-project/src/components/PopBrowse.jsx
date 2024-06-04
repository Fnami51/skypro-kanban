import { useParams, Link } from 'react-router-dom';
import '../App.css'
import Calendar from './Calendar.jsx';
import { getStyle } from './data.js';
import useTasks from '../hooks/useTasks.js';
import * as component from "./ComponentsPopBrowse.jsx"
import { useState } from 'react';
import { deleteCards } from './api.js';
import { useNavigate } from 'react-router-dom';
import useDate from '../hooks/useDate.js';
import * as pb from './style_components/PopBrowse.styled.js'
import * as categories from './style_components/Categories.styled.js'



function PopBrowse() {
    let navigate = useNavigate();
    const params = useParams();
    const {dateInContext} = useDate();

    const {tasks, setTasks} = useTasks()

    const [isChange, setIsChange] = useState(false)
    
    const card = tasks.find( card => card._id === params.cardId);

    function changeCard() {
        setIsChange((prevState) => !prevState);
        console.log(isChange ? `Задача изменяется >> isChange = ${isChange}` : `Задача статична >> isChange = ${isChange}`)
    }

    function deleteCard() {
        deleteCards(card._id , localStorage.getItem("token"))
        .then(data => { 
			setTasks(data.tasks); 
            navigate('/');
		})
        .catch(error => { 
			console.log('Error', error); 
		});
    }

    return <pb.Background id="popBrowse">
    <pb.Container>
        <pb.Block>
            <pb.Content>
                <pb.TopBlock>
                    <pb.Title>{card.title}</pb.Title>
                    <div className={getStyle(card.topic) + " categories__theme theme-top _active-category"}>
                        <p className={getStyle(card.topic)}>{card.topic}</p>
                    </div>
                </pb.TopBlock>

                <div className="pop-browse__status status">
                    <p className="status__p subttl">Статус</p>
                        {isChange ? <component.StatusChange status={card.status}/> : <component.StatusConst status={card.status}/>}
                </div>

                <pb.Wrap>
                    <form className="pop-browse__form form-browse" id="formBrowseCard" action="#">									
                        <div className="form-browse__block">
                            <label htmlFor="textArea01" className="subttl">Описание задачи</label>
                            <textarea className="form-browse__area" name="text" id="textArea01"  readOnly placeholder="Введите описание задачи..."></textarea>
                        </div>
                    </form>
                    <categories.CalendarBox>
                        <p className="calendar__ttl subttl">Даты</p>
                        <div className="calendar__block">
                            
                            <Calendar />
                    
                            <input type="hidden" id="datepick_value" value={dateInContext}/>
                        </div>
                    </categories.CalendarBox>
                </pb.Wrap>
                


                <div className="theme-down__categories theme-down _hide">
                    <p className="categories__p subttl">Категория</p>
                    <div className="categories__theme _orange _active-category">
                        <p className="_orange">Web Design</p>
                    </div>
                </div>

                <pb.ButtonBox style={isChange ? {display: "none"} : {display: "flex"}}>
                    <pb.ButtonGroup>
                        <pb.Button onClick={changeCard} className="btn-browse__edit _btn-bor _hover03">Редактировать задачу</pb.Button>
                        <pb.Button onClick={deleteCard} className="btn-browse__delete _btn-bor _hover03">Удалить задачу</pb.Button>
                    </pb.ButtonGroup>
                    <pb.Button className="btn-browse__close _btn-bg _hover01"><Link to={'/'}>Закрыть</Link></pb.Button>
                </pb.ButtonBox>


                <pb.ButtonBox style={isChange ? {display: "flex"} : {display: "none"}}>
                    <pb.ButtonGroup>
                        <pb.Button className="btn-edit__edit _btn-bg _hover01"><a href="#">Сохранить</a></pb.Button>
                        <pb.Button onClick={changeCard} className="btn-edit__edit _btn-bor _hover03">Отменить</pb.Button>
                        <pb.Button onClick={deleteCard} className="btn-edit__delete _btn-bor _hover03" id="btnDelete">Удалить задачу</pb.Button>
                    </pb.ButtonGroup>
                    <pb.Button className="btn-edit__close _btn-bg _hover01"><Link to={'/'}>Закрыть</Link></pb.Button>
                </pb.ButtonBox>
                                        
            </pb.Content>
        </pb.Block>
    </pb.Container>
</pb.Background>;
  }
 
  export default PopBrowse;