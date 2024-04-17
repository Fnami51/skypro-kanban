import '../App.css'
import Card from './Card.jsx';

function Column({ title, cardInColumn }) {
    return <div className="main__column column">
    <div className="column__title">
        <p>{title}</p>
    </div>
    <div className="cards">
        {cardInColumn.map((card) => 
            <Card 
                key={card.id}
                topic={card.topic}
                title={card.title}
                date={card.date}
        />)}
    
    </div>
</div>;
  }
 
  export default Column;