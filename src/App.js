
import './App.css';
import Home from './pages/Home'
import About from './pages/About'
import {
  HashRouter,
  Route,
  NavLink,
  Routes
} from "react-router-dom";
function App() {
  return (
    <HashRouter>
            <h3>
              <NavLink to="/home"> 首页</NavLink>
              <NavLink to="/about"> 关于</NavLink>
            </h3>
            <Routes>
              <Route path='/home'  element={<Home/>}></Route>
              <Route path='/about'  element={<About/>}></Route>
            </Routes>
    </HashRouter>
  );
}

export default App;
