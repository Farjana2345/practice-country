import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,Switch,Route} from "react-router-dom";
import NotMatched from './components/NotMatched/NotMatched';
import PostDetail from './components/PostDetail/PostDetail';

;


function App() {
  return (
    <div className="container">
     <Router>
       <Header></Header>
       <Switch>
         <Route exact path="/">
          <Home></Home>
         </Route>
         <Route path="/home">
          <Home></Home>
         </Route>
         <Route path="/post/:postId">
         <PostDetail></PostDetail>
         </Route>
         <Route path="*">
          <NotMatched></NotMatched>
         </Route>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
