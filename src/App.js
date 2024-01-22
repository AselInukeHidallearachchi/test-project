import{Routes ,Route} from 'react-router-dom'
import './App.css';
import Home from './Pages/Home';
import Login from './Pages/Login';
import InitialLogin from './Pages/InitialLogin';
import SignUp from './Pages/SignUp';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
      
          <Routes>
            <Route path="/home" element={<Home />}> </Route>
            <Route path="/" element={<InitialLogin />}> </Route>
            <Route path="/login" element={<Login/>}> </Route>
            <Route path="/signup" element={<SignUp />}> </Route>
          </Routes>
      
    </div>
  );
}

export default App;
