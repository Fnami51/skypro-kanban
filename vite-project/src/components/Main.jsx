import '../App.css'
import Column from './Column.jsx';

function Main() {
    return <main className="main">
    <div className="container">
        
        <div className="main__block">
            <div className="main__content">
                <Column nameColumn="Без статуса"/>						
                <Column nameColumn="Нужно сделать"/>
                <Column nameColumn="В работе"/>
                <Column nameColumn="Тестирование"/>
                <Column nameColumn="Готово"/>
            </div>
        
        </div>
    </div>
</main>;
  }
  
  export default Main;