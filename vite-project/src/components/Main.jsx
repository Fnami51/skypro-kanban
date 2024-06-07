import * as main from './style_components/Main.styled.js'
import { Container } from '../App.styled.js';
import Column from './Column.jsx';
import { statusList } from './data.js';
import useTasks from '../hooks/useTasks.js';

function Main() {
    const {tasks} = useTasks()

    return <main.Background>
    <Container>
        
        <main.Main>
        <main.Content>
            {statusList.map((status) => (
                <Column
                    key={status}
                    title={status}
                    cardInColumn={tasks.filter((card) => card.status === status)}
            />))}
        </main.Content>
        
        </main.Main>
    </Container>
</main.Background>;
  }
  
  export default Main;