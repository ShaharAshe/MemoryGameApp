import './App.css';
import MemoryGameTable from "./components/MemoryGameTable";
import {Container} from "react-bootstrap";

function App() {
  return (
      <div className="App">
          <Container className="fluid">
              <MemoryGameTable/>
          </Container>
      </div>
  );
}

export default App;
