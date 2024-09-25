import Navbar from './components/Navbar/Navbar'
import Pages from './components/Pages/Pages'
import { BrowserRouter } from 'react-router-dom';

function App() {

  return (
    <div >
      
    <BrowserRouter>
      <Navbar/>
      <Pages/>
      </BrowserRouter>
    </div>
  );
}

export default App;
