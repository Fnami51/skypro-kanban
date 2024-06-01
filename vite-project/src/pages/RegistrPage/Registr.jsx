import * as registr from '../style_pages/Registr.styled.js';
import { Link, useNavigate } from 'react-router-dom'
import { registerUser } from '../../components/api.js';
function Registr() {
    let navigate = useNavigate();
      
    function handleSubmit(event) {
        event.preventDefault();
        try {
            const name = event.target.elements.first_name.value
            const login = event.target.loginReg.value
            const password = event.target.passwordFirst.value
            registerUser(login, name, password ).then((data) => {
                localStorage.setItem("name", data.user.name)
                localStorage.setItem("email", data.user.login) 
                localStorage.setItem("token", data.user.token)
                navigate('/');
            });

        } catch (error) {
            console.log('Error', error)
        }
            
    }
    return (
    <registr.Wrapper>
        <registr.Container>
            <registr.Modal>
                <registr.Block>
                        <registr.Topic>Регистрация</registr.Topic>
                    <registr.Form id="formLogUp" onSubmit={handleSubmit} action="#">
                        <registr.Input type="text" name="first-name" id="first_name" placeholder="Имя"/>
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