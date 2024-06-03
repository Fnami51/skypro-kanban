import '../App.css'
import * as header from './style_components/Header.styled.js'
import { useState } from 'react';
import { Container } from '../App.styled.js';
import { Link } from 'react-router-dom';

function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const openMenu = () => {
        setIsOpen((prevState) => !prevState);
    };

    return <header.Background>
    <Container>
        <header.Header>
            <div className="header__logo _show _light">
                <a href="" target="_self"><img src="images/logo.png" alt="logo"/></a>
            </div>
            <div className="header__logo _dark">
                <a href="" target="_self"><img src="images/logo_dark.png" alt="logo"/></a>
            </div>
            <header.Navigator>
                <button className="header__btn-main-new _hover01" id="btnMainNew"><Link to={'/newcard'}>Создать новую задачу</Link></button>
                <a onClick={openMenu} className="header__user _hover02">{localStorage.getItem("name")}</a>
                
                <div style={isOpen ? {display: "block"} : {display: "none"}} className="header__pop-user-set pop-user-set" id="user-set-target">
                    <p className="pop-user-set__name">{localStorage.getItem("name")}</p>
                    <p className="pop-user-set__mail">{localStorage.getItem("email")}</p>
                    
                    <button type="button" className="_hover03"><a href="exit">Выйти</a></button>
                </div>
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