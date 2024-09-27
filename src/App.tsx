import Navbar from './components/Navbar/Navbar'
import Pages from './components/Pages/Pages'
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <div >  
    <BrowserRouter>
      <Navbar/>
      <Pages/>
      <ToastContainer position='bottom-right' autoClose={1000} theme='dark'/>
      </BrowserRouter>
    </div>
  );
}

export default App;
