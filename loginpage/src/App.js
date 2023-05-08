import {BrowserRouter,
  Routes,Route} from 'react-router-dom'
import Login from './component/Login'
import Entries from './component/Entries'
import Home from './component/Home'
import './App.css';


const App=()=>(
   <BrowserRouter>
  <Routes>
    <Route exact path="/" element={<Home/>} />
    <Route path="/login" element={<Login/>}/> 
    <Route path="/userdata" element={<Entries/>} />
    </Routes>
  </BrowserRouter>
  
)


export default App;
