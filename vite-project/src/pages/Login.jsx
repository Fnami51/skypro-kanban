import * as login from './style_pages/Login.styled.js';

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
                        <button class="modal__btn-enter _hover01" id="btnEnter"><a href="../main.html">Войти</a></button>
                        <div class="modal__form-group">
                            <p>Нужно зарегистрироваться?</p>
                            <a href="signup.html">Регистрируйтесь здесь</a>
                        </div>
                    </login.Form>
                </login.Block>
            </login.Modal>
        </login.Container>
    </login.Wrapper>
    )
};

export default Login