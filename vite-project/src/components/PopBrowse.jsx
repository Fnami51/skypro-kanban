import { useParams, Link } from 'react-router-dom';
import Calendar from './Calendar.jsx';
import { getStyle } from './data.js';
import useTasks from '../hooks/useTasks.js';
import useAuth from '../hooks/useAuth.js';
import { useEffect, useState } from 'react';
import { deleteCards, putCards } from './api.js';
import { useNavigate } from 'react-router-dom';
import * as PB from './style_components/PopBrowse.styled.js'
import * as CC from './style_components/CommonComponents.styled.js'



function PopBrowse() {
    let navigate = useNavigate();
    const {cardId} = useParams();
    const {user} = useAuth();
    const [date, setNewDate] = useState(new Date());
    const token = user.token

    const {tasks, setTasks} = useTasks()

    const [isChange, setIsChange] = useState(false)

    const card = tasks.find( card => card._id === cardId);

    useEffect(() => {
        setNewDate(new Date(card.date))
    }, [card])

    function changeCard() {
        setIsChange((prevState) => !prevState);
    }

    const [task, setTask] = useState({
        title: card.title, 
        topic: card.topic, 
        status: card.status, 
        description: card.description,
    })


        function saveCard() {
            putCards({...task, id: cardId, token, date}).then(data => { 
                setTasks(data.tasks); 
                navigate('/');
            })
            .catch(error => { 
                console.log('Error APi', error);
                alert(error.message); 
            });
        }

    function deleteCard() {
        deleteCards(card._id , token)
        .then(data => { 
			setTasks(data.tasks); 
            navigate('/');
		})
        .catch(error => { 
			console.log('Error APi', error); 
            alert(error.message);
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

                        <PB.StatusThemeBlock style={isChange ? {display: "none"} : {display: "flex"}}>
                            <PB.StatusThemeConst className="_gray">
                                {card.status}
                            </PB.StatusThemeConst>
                         </PB.StatusThemeBlock>

                         <PB.StatusThemeBlock style={isChange ? {display: "flex"} : {display: "none"}}>
                            <PB.StatusInput type="radio" name="status" id="input--without_status" value="Без статуса" onChange={() => setTask({...task, status : "Без статуса"})} style={{display: "none"}}/>
                            <PB.StatusTheme htmlFor="input--without_status">Без статуса</PB.StatusTheme>

                            <PB.StatusInput type="radio" name="status" id="input--need_do" value="Нужно сделать" onChange={() => setTask({...task, status : "Нужно сделать"})} style={{display: "none"}}/>
                            <PB.StatusTheme htmlFor="input--need_do">Нужно сделать</PB.StatusTheme>

                            <PB.StatusInput type="radio" name="status" id="input--at_work" value="В работе" onChange={() => setTask({...task, status : "В работе"})} style={{display: "none"}}/>
                            <PB.StatusTheme htmlFor="input--at_work">В работе</PB.StatusTheme>

                            <PB.StatusInput type="radio" name="status" id="input--testing" value="Тестирование" onChange={() => setTask({...task, status : "Тестирование"})} style={{display: "none"}}/>
                            <PB.StatusTheme htmlFor="input--testing">Тестирование</PB.StatusTheme>

                            <PB.StatusInput type="radio" name="status" id="input--final" value="Готово" onChange={() => setTask({...task, status : "Готово"})} style={{display: "none"}}/>
                            <PB.StatusTheme htmlFor="input--final">Готово</PB.StatusTheme>
                         </PB.StatusThemeBlock>


                </PB.Status>

                <PB.Wrap>
                    <PB.Form id="formBrowseCard" action="#">									
                        <PB.FormBlock>
                            <PB.FormTitle htmlFor="textArea01">Описание задачи</PB.FormTitle>
                            <PB.Textarea name="text" id="textArea01" onChange={e => setTask({...task, description: e.target.value})} placeholder={card.description ? card.description : "Введите описание задачи ..."}>{card.description}</PB.Textarea>
                        </PB.FormBlock>
                    </PB.Form>
                    <CC.CalendarBox>
                        <CC.Title>Даты</CC.Title>
                        <div style={{display: "block"}}>
                            
                            <Calendar date={date} setNewDate={setNewDate}/>
                    
                        </div>
                    </CC.CalendarBox>
                </PB.Wrap>
                


                <CC.Background style={isChange ? {display: "block"} : {display: "none"}}>
                    <CC.Title>Категория</CC.Title>
                    <CC.ThemeBox>
                    
                            <CC.InputRadio type="radio" name="topic" id="input--web_design" value="Web Design" onChange={() => setTask({...task, topic : "Web Design"})} style={{display: "none"}}/>
                            <CC.Theme className="_orange" htmlFor="input--web_design">
                                Web Design
                            </CC.Theme>
                    
                            <CC.InputRadio type="radio" name="topic" id="input--research" value="Research" onChange={() => setTask({...task, topic : "Research"})} style={{display: "none"}}/>
                            <CC.Theme className="_green" htmlFor="input--research">
                                Research
                            </CC.Theme>
                    
                            <CC.InputRadio type="radio" name="topic" id="input--copywriting" value="Copywriting" onChange={() => setTask({...task, topic : "Copywriting"})} style={{display: "none"}}/>
                            <CC.Theme className="_purple" htmlFor="input--copywriting">
                                Copywriting
                            </CC.Theme>
                    
                    </CC.ThemeBox>
                </CC.Background>



                <PB.ButtonBox style={isChange ? {display: "none"} : {display: "flex"}}>
                    <PB.ButtonGroup>
                        <PB.ButtonBOR onClick={changeCard} >Редактировать задачу</PB.ButtonBOR>
                        <PB.ButtonBOR onClick={deleteCard} >Удалить задачу</PB.ButtonBOR>
                    </PB.ButtonGroup>
                    <PB.ButtonBG ><Link to={'/'} style={{color: '#fff'}}>Закрыть</Link></PB.ButtonBG>
                </PB.ButtonBox>


                <PB.ButtonBox style={isChange ? {display: "flex"} : {display: "none"}}>
                    <PB.ButtonGroup>
                        <PB.ButtonBG onClick={saveCard} style={{color: '#fff'}}>Сохранить</PB.ButtonBG>
                        <PB.ButtonBOR onClick={changeCard} >Отменить</PB.ButtonBOR>
                        <PB.ButtonBOR onClick={deleteCard}  id="btnDelete">Удалить задачу</PB.ButtonBOR>
                    </PB.ButtonGroup>
                    <PB.ButtonBG ><Link to={'/'} style={{color: '#fff'}}>Закрыть</Link></PB.ButtonBG>
                </PB.ButtonBox>
                                        
            </PB.Content>
        </PB.Block>
    </PB.Container>
</PB.Background>;
  }
 
  export default PopBrowse;