import Calendar from './Calendar.jsx';
import { postCards } from './api.js';
import useTasks from '../hooks/useTasks.js';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import * as PNC from './style_components/PopNewCard.styled.js'
import * as CC from './style_components/CommonComponents.styled.js'


function PopNewCard() {
    let navigate = useNavigate();
    const {setTasks} = useTasks()
    const [date, setNewDate] = useState(new Date());


    function onCardAdd() {
        postCards(localStorage.getItem("token"), task.title, task.topic, task.status, task.description, date)
		.then(data => { 
			setTasks(data.tasks);
            navigate('/');
		})
		.catch(error => { 
			console.log('Error APi', error); 
            alert(error.message);
		});
    }

const [task, setTask] = useState({
    title: "", 
    topic: "Research", 
    status: "Без статуса", 
    description: "", 
    })

    return <PNC.Background id="popNewCard">
    <PNC.Container>
        <PNC.Block>
            <PNC.Content>
                <PNC.Title>Создание задачи</PNC.Title>
                <PNC.Close ><Link to={"/"}>&#10006;</Link></PNC.Close>
                <PNC.Wrap>
                    <PNC.Form id="formNewCard" action="#">
                        <PNC.FormBlock>
                            <label htmlFor="formTitle">
                                <CC.Title>Название задачи</CC.Title>
                            </label>
                            <PNC.Input type="text" name="title" id="formTitle" onChange={e => setTask({...task, title: e.target.value})} placeholder="Введите название задачи..." autoFocus/>
                        </PNC.FormBlock>
                        <PNC.FormBlock>
                            <label htmlFor="textArea">
                                <CC.Title>Описание задачи</CC.Title>
                            </label>
                            <PNC.Textarea name="description" id="textArea" onChange={e => setTask({...task, description: e.target.value})}  placeholder="Введите описание задачи..."></PNC.Textarea>
                        </PNC.FormBlock>
                    </PNC.Form>


                    <CC.CalendarBox>
                        <CC.Title>Даты</CC.Title>
                        <div style={{display: "block"}}>
                            
                            <Calendar date={date} setNewDate={setNewDate}/>
                    
                        </div>
                    </CC.CalendarBox>

                </PNC.Wrap>
                <CC.Background>
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
                <PNC.Button onClick={onCardAdd} id="btnCreate">Создать задачу</PNC.Button>
            </PNC.Content>
        </PNC.Block>
    </PNC.Container>
</PNC.Background>;
  }
 
  export default PopNewCard;