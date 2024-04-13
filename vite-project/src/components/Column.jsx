import '../App.css'
import Card from './Card.jsx';

function Column({ nameColumn }) {
    return <div className="main__column column">
    <div className="column__title">
        <p>{nameColumn}</p>
    </div>
    <div className="cards">
        <Card />
    
    </div>
</div>;
  }
 
  export default Column;