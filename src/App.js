import './App.css';
import MemoryGameTable from "./components/MemoryGameTable";
import {Container} from "react-bootstrap";

/**
 * Main component of the application.
 * @returns {JSX.Element} - Rendered App component.
 */
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
