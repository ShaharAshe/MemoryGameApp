import './App.css';
import MemoryGameTable from "./components/MemoryGameTable";
import {Container} from "react-bootstrap";

function App() {
  return (
      <div className="App">
          <Container className="fluid text-center">
              <MemoryGameTable/>
          </Container>
      </div>
  );
}

export default App;
