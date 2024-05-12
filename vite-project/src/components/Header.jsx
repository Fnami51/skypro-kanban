import '../App.css'
import * as header from './style_components/Header.styled.js'
import { useState } from 'react';
import { Container } from '../App.styled.js';

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
                <button className="header__btn-main-new _hover01" id="btnMainNew"><a href="#popNewCard">Создать новую задачу</a></button>
                <a onClick={openMenu} className="header__user _hover02">Ivan Ivanov</a>
            
                <div style={isOpen ? {display: "block"} : {display: "none"}} className="header__pop-user-set pop-user-set" id="user-set-target">
                    <p className="pop-user-set__name">Ivan Ivanov</p>
                    <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
                    <div className="pop-user-set__theme">
                        <p>Темная тема</p>
                        <input type="checkbox" className="checkbox" name="checkbox"/>
                    </div>
                    <button type="button" className="_hover03"><a href="#popExit">Выйти</a></button>
                </div>
            </header.Navigator>					
        </header.Header>
    </Container>			
</header.Background>;
  }
  
  export default Header;