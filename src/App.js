
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {increment, decrement} from "./redux/actions/actionindex";
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link
} from "react-router-dom";
import About from './pages/About';
import Users from './pages/Users';
import Home from './pages/Home';

function App() {
  const mystate= useSelector((state)=>state.Change);
  const dispatch= useDispatch();
  return (
  //   <Router>
  //   <div>
  //     <nav>
  //       <ul>
  //         <li>
  //           <Link to="/">Home</Link>
  //         </li>
  //         <li>
  //           <Link to="/about">About</Link>
  //         </li>
  //         <li>
  //           <Link to="/users">Users</Link>
  //         </li>
  //       </ul>
  //     </nav>

  //     {/* A <Switch> looks through its children <Route>s and
  //         renders the first one that matches the current URL. */}
  //          <Routes>
  //                <Route exact path='/' element={< Home />}></Route>
  //                <Route exact path='/about' element={< About />}></Route>
  //                <Route exact path='/users' element={< Users />}></Route>
  //         </Routes>
  //     {/* <Switch>
  //       <Route path="/about">
  //         <About />
  //       </Route>
  //       <Route path="/users">
  //         <Users />
  //       </Route>
  //       <Route path="/">
  //         <Home />
  //       </Route>
  //     </Switch> */}
  //   </div>
  // </Router>

  
   <>
   
   <div>
     <h1>Check</h1>
     <div>
       <a onClick={()=> dispatch(decrement(1))}>-</a> <span></span>
       <input type="text" name="" id="" value={mystate} /> 
     <span></span>  <a onClick={()=> dispatch(increment(5))}>+</a>
     </div>
   </div>
   </>
  );


}

export default App;
