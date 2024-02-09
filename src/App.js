
import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import Posts from './components/Posts';

function App() {
  return (
    <div className="App">
      <ChakraProvider>
      <h1>Crud Redux</h1>
      <Posts/>
      </ChakraProvider>
        
    </div>
  );
}

export default App;
