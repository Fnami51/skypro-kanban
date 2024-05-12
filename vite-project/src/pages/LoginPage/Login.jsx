import * as login from '../style_pages/Login.styled.js';

function Login() {
    return (
    <login.Wrapper>
        <login.Container>
            <login.Modal>
                <login.Block>
                        <login.Topic>Вход</login.Topic>
                    <login.Form id="formLogIn" action="#">
                        <login.Input type="text" name="login" id="formlogin" placeholder="Эл. почта"/>
                        <login.Input type="password" name="password" id="formpassword" placeholder="Пароль"/>
                        <login.Enter id="btnEnter"><a href="#">Войти</a></login.Enter>
                        <login.Navigator>
                            <login.Text>Нужно зарегистрироваться?</login.Text>
                            <login.Link href="signup.html">Регистрируйтесь здесь</login.Link>
                        </login.Navigator>
                    </login.Form>
                </login.Block>
            </login.Modal>
        </login.Container>
    </login.Wrapper>
    )
}

export default Login