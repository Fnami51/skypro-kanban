import '../App.css'
import * as column from './Column.styled.js'
import Card from './Card.jsx';

function Column({ title, cardInColumn }) {
    return <column.Column>
    <column.TitleFrames>
        <column.Title>{title}</column.Title>
    </column.TitleFrames>
    <column.Cards>
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