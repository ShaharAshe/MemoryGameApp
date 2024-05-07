import './App.css';
import MemoryGameTable from "./components/MemoryGameTable";
import {Container} from "react-bootstrap";

function App() {
  return (
      <>
          <Container className="fluid">
              <MemoryGameTable/>
          </Container>
      </>
  );
}

export default App;
