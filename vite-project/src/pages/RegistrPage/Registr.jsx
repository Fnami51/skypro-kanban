import * as registr from '../style_pages/Registr.styled.js';

function Registr() {
    return (
    <registr.Wrapper>
        <registr.Container>
            <registr.Modal>
                <registr.Block>
                        <registr.Topic>Вход</registr.Topic>
                    <registr.Form id="formLogUp" action="#">
                        <registr.Input type="text" name="first-name" id="first-name" placeholder="Имя"/>
                        <registr.Input type="text" name="login" id="loginReg" placeholder="Эл. почта"/>
                        <registr.Input type="password" name="password" id="passwordFirst" placeholder="Пароль"/>
                        <registr.Enter id="SignUpEnter"><a href="#">Зарегистрироваться</a></registr.Enter>
                        <registr.Navigator>
                            <registr.Text>Уже есть аккаунт?</registr.Text>
                            <registr.Link href="signup.html">Войдите здесь</registr.Link>
                        </registr.Navigator>
                    </registr.Form>
                </registr.Block>
            </registr.Modal>
        </registr.Container>
    </registr.Wrapper>
    )
}

export default Registr