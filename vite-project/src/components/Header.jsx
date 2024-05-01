import '../App.css'
<<<<<<< HEAD
import * as header from './Header.styled.js'
=======
import {Container} from '../App.styled.js'
>>>>>>> 295cddc92825fc6071b267e2fa06498bef3646dd
import { useState } from 'react';
import { Container } from '../App.styled.js';

function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const openMenu = () => {
        setIsOpen((prevState) => !prevState);
    };

<<<<<<< HEAD
    return <header.Background>
    <Container>
        <header.Header>
=======
    return <header className="header">
    <Container>
        <div className="header__block">
>>>>>>> 295cddc92825fc6071b267e2fa06498bef3646dd
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
<<<<<<< HEAD
            </header.Navigator>					
        </header.Header>
    </Container>			
</header.Background>;
=======
            </nav>					
        </div>
    </Container>			
</header>;
>>>>>>> 295cddc92825fc6071b267e2fa06498bef3646dd
  }
  
  export default Header;