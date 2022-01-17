import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'
import Questions from './pages/Questions';
import Settings from './pages/Settings';
import FinalScreen from './pages/FinalScreen'
import { Container, Typography } from "@mui/material"
import { Box } from "@mui/system"


function App() {
  return (
    <Router>
      <Container maxWidth="sm">
        <Box textAlign="center" mt={5}>
          <Routes>
            <Route  
              path="/" 
              element={ <Settings/>}  
              exact/>
            <Route path="/questions" element={ <Questions/>} />
            <Route path="/score" element={ <FinalScreen/>} />
          </Routes>
        </Box>
      </Container>
    </Router>
  );
}

export default App;
