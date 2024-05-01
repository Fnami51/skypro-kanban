import '../App.css'
import * as column from './Column.styled.js'
import Card from './Card.jsx';

function Column({ title, cardInColumn }) {
<<<<<<< HEAD
    return <column.Column>
    <column.TitleFrames>
        <column.Title>{title}</column.Title>
    </column.TitleFrames>
    <column.Cards>
=======
    return <div className="column">
    <div className="column__title">
        <p>{title}</p>
    </div>
    <div className="cards">
>>>>>>> 295cddc92825fc6071b267e2fa06498bef3646dd
        {cardInColumn.map((card) => 
            <Card 
                key={card.id}
                topic={card.topic}
                title={card.title}
                date={card.date}
        />)}
    
    </column.Cards>
</column.Column>;
  }
 
  export default Column;