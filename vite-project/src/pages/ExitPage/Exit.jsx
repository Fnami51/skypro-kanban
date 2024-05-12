import * as exit from '../style_pages/Exit.styled.js'
import { useNavigate } from 'react-router-dom'

function Exit() {
    let navigate = useNavigate();
      
    function goLoginPage(event) {
        event.preventDefault();
        navigate('/login');
    }

    function goHomePage(event) {
        event.preventDefault();
        navigate('/');
    }

    return (
    <exit.ExitPage id="popExit">
        <exit.Container>
            <exit.Block>
                <exit.Ask>Выйти из аккаунта?</exit.Ask>
                <exit.Form id="formExit" action="#">
                    <exit.Yes id="exitYes" onClick={goLoginPage}>Да, выйти</exit.Yes>
                    <exit.No id="exitNo" onClick={goHomePage}>Нет, остаться</exit.No>
                </exit.Form>
            </exit.Block>
        </exit.Container>
    </exit.ExitPage>
)}

export default Exit