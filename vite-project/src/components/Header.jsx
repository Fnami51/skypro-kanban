
import * as header from './style_components/Header.styled.js'
import { useState } from 'react';
import { Container } from '../App.styled.js';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth.js';

function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const {user} = useAuth()
    const openMenu = () => {
        setIsOpen((prevState) => !prevState);
    };

    return <header.Background>
    <Container>
        <header.Header>
            <Link to={"/"}><header.Logo src="images/logo.png" alt="logo"/></Link>
            
            <header.Navigator>
                <header.NewTaskButton id="btnMainNew"><Link to={'/newcard'} style={{color: '#FFF'}}>Создать новую задачу</Link></header.NewTaskButton>
                <header.Menu onClick={openMenu} className="_hover02">
                    {user.name}
                    <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.08955 1.13726C0.840306 0.891094 0.437472 0.891094 0.188227 1.13726C-0.0627424 1.38514 -0.0627423 1.78832 0.188227 2.03619L2.87162 4.68647C3.35849 5.16734 4.14151 5.16734 4.62838 4.68647L7.31177 2.03619C7.56274 1.78832 7.56274 1.38514 7.31177 1.13726C7.06253 0.891095 6.65969 0.891094 6.41045 1.13726L3.75 3.76489L1.08955 1.13726Z" fill="#565EEF"/>
                    </svg>
                </header.Menu>
                

                
                <header.UserSet style={isOpen ? {display: "block"} : {display: "none"}} id="user-set-target">
                    <header.Name>{user.name}</header.Name>
                    <header.Mail>{user.email}</header.Mail>
                    
                    <header.ExitButton type="button"><Link to={'/exit'} style={{color: '#565EEF'}}>Выйти</Link></header.ExitButton>
                </header.UserSet>
            </header.Navigator>					
        </header.Header>
    </Container>			
</header.Background>;
  }
  
  export default Header;

/*
<div className="pop-user-set__theme">
    <p>Темная тема</p>
    <input type="checkbox" className="checkbox" name="checkbox"/>
</div>
*/