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
import * as PB from './style_components/PopBrowse.styled.js'
import * as CC from './style_components/CommonComponents.styled.js'


//Не забудь исправить стили в кнопках


function PopBrowse() {
    let navigate = useNavigate();
    const params = useParams();
    const {dateInContext} = useDate();

    const {tasks, setTasks} = useTasks()

    const [isChange, setIsChange] = useState(false)
    
    const card = tasks.find( card => card._id === params.cardId);

    function changeCard() {
        setIsChange((prevState) => !prevState);
        // дописать функционал
    }

    const [task, setTask] = useState({
        title: card.title, 
        topic: card.topic, 
        status: card.status, 
        description: card.description, 
        date: card.date})


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

    return <PB.Background id="popBrowse">
    <PB.Container>
        <PB.Block>
            <PB.Content>
                <PB.TopBlock>
                    <PB.Title>{card.title}</PB.Title>
                    <div className={getStyle(card.topic) + " categories__theme theme-top _active-category"}>
                        <p className={getStyle(card.topic)}>{card.topic}</p>
                    </div>
                </PB.TopBlock>

                <PB.Status>
                    <CC.Title>Статус</CC.Title>

                        {isChange ? <component.StatusChange /> : <component.StatusConst status={card.status}/>}
                </PB.Status>

                <PB.Wrap>
                    <PB.Form id="formBrowseCard" action="#">									
                        <PB.FormBlock>
                            <label htmlFor="textArea01" className="subttl">Описание задачи</label>
                            <PB.Textarea name="text" id="textArea01"  readOnly placeholder="Введите описание задачи..."></PB.Textarea>
                        </PB.FormBlock>
                    </PB.Form>
                    <CC.CalendarBox>
                        <CC.Title>Даты</CC.Title>
                        <div style={{display: "block"}}>
                            
                            <Calendar />
                    
                            <input type="hidden" id="datepick_value" value={dateInContext}/>
                        </div>
                    </CC.CalendarBox>
                </PB.Wrap>
                


                <CC.Background style={isChange ? {display: "block"} : {display: "none"}}>
                    <CC.Title>Категория</CC.Title>
                    <CC.ThemeBox>
                    
                            <input type="radio" name="topic" id="input--web_design" value="Web Design" onChange={() => setTask({...task, topic : "Web Design"})} style={{display: "none"}}/>
                            <CC.Theme className="_orange" htmlFor="input--web_design">
                                Web Design
                            </CC.Theme>
                    
                            <input type="radio" name="topic" id="input--research" value="Research" onChange={() => setTask({...task, topic : "Research"})} style={{display: "none"}}/>
                            <CC.Theme className="_green" htmlFor="input--research">
                                Research
                            </CC.Theme>
                    
                            <input type="radio" name="topic" id="input--copywriting" value="Copywriting" onChange={() => setTask({...task, topic : "Copywriting"})} style={{display: "none"}}/>
                            <CC.Theme className="_purple" htmlFor="input--copywriting">
                                Copywriting
                            </CC.Theme>
                    
                    </CC.ThemeBox>
                </CC.Background>



                <PB.ButtonBox style={isChange ? {display: "none"} : {display: "flex"}}>
                    <PB.ButtonGroup>
                        <PB.Button onClick={changeCard} className="btn-browse__edit _btn-bor _hover03">Редактировать задачу</PB.Button>
                        <PB.Button onClick={deleteCard} className="btn-browse__delete _btn-bor _hover03">Удалить задачу</PB.Button>
                    </PB.ButtonGroup>
                    <PB.Button className="btn-browse__close _btn-bg _hover01"><Link to={'/'}>Закрыть</Link></PB.Button>
                </PB.ButtonBox>


                <PB.ButtonBox style={isChange ? {display: "flex"} : {display: "none"}}>
                    <PB.ButtonGroup>
                        <PB.Button className="btn-edit__edit _btn-bg _hover01"><a href="#">Сохранить</a></PB.Button>
                        <PB.Button onClick={changeCard} className="btn-edit__edit _btn-bor _hover03">Отменить</PB.Button>
                        <PB.Button onClick={deleteCard} className="btn-edit__delete _btn-bor _hover03" id="btnDelete">Удалить задачу</PB.Button>
                    </PB.ButtonGroup>
                    <PB.Button className="btn-edit__close _btn-bg _hover01"><Link to={'/'}>Закрыть</Link></PB.Button>
                </PB.ButtonBox>
                                        
            </PB.Content>
        </PB.Block>
    </PB.Container>
</PB.Background>;
  }
 
  export default PopBrowse;