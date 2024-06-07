import * as main from './style_components/Main.styled.js'
import { Container } from '../App.styled.js';

function Loading() {
    return <main.Background>
    <Container>
        
        <main.Main>
        <main.Content>
            Загрузка ...
        </main.Content>
        
        </main.Main>
    </Container>
</main.Background>;
  }
  
  export default Loading;