import '../App.css'
<<<<<<< HEAD
import * as main from './Main.styled.js'
import { Container } from '../App.styled.js';
=======
import {Container} from '../App.styled.js'
>>>>>>> 295cddc92825fc6071b267e2fa06498bef3646dd
import Column from './Column.jsx';
import { statusList } from './data.js';

function Main({cards}) {
<<<<<<< HEAD
    return <main.Background>
=======
    return <main className="main">
>>>>>>> 295cddc92825fc6071b267e2fa06498bef3646dd
    <Container>
        
        <main.Main>
        <main.Content>
            {statusList.map((status) => (
                <Column
                    key={status}
                    title={status}
                    cardInColumn={cards.filter((card) => card.status === status)}
            />))}
        </main.Content>
        
<<<<<<< HEAD
        </main.Main>
    </Container>
</main.Background>;
=======
        </div>
    </Container>
</main>;
>>>>>>> 295cddc92825fc6071b267e2fa06498bef3646dd
  }
  
  export default Main;