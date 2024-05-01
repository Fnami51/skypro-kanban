import '../App.css'
import {Container} from '../App.styled.js'
import Column from './Column.jsx';
import { statusList } from './data.js';

function Main({cards}) {
    return <main className="main">
    <Container>
        
        <div className="main__block">
        <div className="main__content">
            {statusList.map((status) => (
                <Column
                    key={status}
                    title={status}
                    cardInColumn={cards.filter((card) => card.status === status)}
            />))}
        </div>
        
        </div>
    </Container>
</main>;
  }
  
  export default Main;