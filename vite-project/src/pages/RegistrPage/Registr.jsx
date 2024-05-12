import * as registr from '../style_pages/Registr.styled.js';
import { Link, useNavigate } from 'react-router-dom'

function Registr() {
    let navigate = useNavigate();
      
    function handleSubmit(event) {
        event.preventDefault();
          // Потом использовать переменную isAuth, когда подключем сервис с пользователями.
        navigate('/');
    }
    return (
    <registr.Wrapper>
        <registr.Container>
            <registr.Modal>
                <registr.Block>
                        <registr.Topic>Регистрация</registr.Topic>
                    <registr.Form id="formLogUp" onSubmit={handleSubmit} action="#">
                        <registr.Input type="text" name="first-name" id="first-name" placeholder="Имя"/>
                        <registr.Input type="text" name="login" id="loginReg" placeholder="Эл. почта"/>
                        <registr.Input type="password" name="password" id="passwordFirst" placeholder="Пароль"/>
                        <registr.Enter id="SignUpEnter">Зарегистрироваться</registr.Enter>
                        <registr.Navigator>
                            <registr.Text>Уже есть аккаунт? <Link to="/login">Войдите здесь</Link></registr.Text>
                        </registr.Navigator>
                    </registr.Form>
                </registr.Block>
            </registr.Modal>
        </registr.Container>
    </registr.Wrapper>
    )
}

export default Registr