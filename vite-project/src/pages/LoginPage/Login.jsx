import * as login from '../style_pages/Login.styled.js';
import { Link, useNavigate } from 'react-router-dom'

import { loginUser } from '../../components/api.js';
function Login() {
    let navigate = useNavigate();
    function handleSubmit(event) {
        event.preventDefault();
        try {
            const login = event.target.formlogin.value
            const password = event.target.formpassword.value
            loginUser(login, password ).then((data) => {
                localStorage.setItem("user", data.user) 
                localStorage.setItem("token", data.user.token)
                navigate('/');
            });
            

        } catch (error) {
            console.log('Error', error)
        }
            
    }

    return (
    <login.Wrapper>
        <login.Container>
            <login.Modal>
                <login.Block>
                        <login.Topic>Вход</login.Topic>
                    <login.Form id="formLogIn" onSubmit={handleSubmit} action="#">
                        <login.Input type="text" name="login" id="formlogin" placeholder="Эл. почта"/>
                        <login.Input type="password" name="password" id="formpassword" placeholder="Пароль"/>
                        <login.Enter id="btnEnter" type="submit">Войти</login.Enter>
                        <login.Navigator>
                            <login.Text>Нужно зарегистрироваться? <Link to="/registr">Регистрируйтесь здесь</Link></login.Text>
                        </login.Navigator>
                    </login.Form>
                </login.Block>
            </login.Modal>
        </login.Container>
    </login.Wrapper>
    )
}

export default Login