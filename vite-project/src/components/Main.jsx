import '../App.css'
import Column from './Column.jsx';
import { statusList, cardList } from './data.js';

function Main() {
    return <main className="main">
    <div className="container">
        
        <div className="main__block">
        <div className="main__content">
            {statusList.map((status) => (
                <Column
                    key={status}
                    title={status}
                    cardInColumn={cardList.filter((card) => card.status === status)}
            />))}
        </div>
        
        </div>
    </div>
</main>;
  }
  
  export default Main;