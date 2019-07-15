import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
//路由
import router from './router'
import GuardRoute from './guardCom/GuardRoute'

require('./css/public.css');
function App() {
  return (
      <Router>
        {
          router.map((v,i)=>{
            return (
                <Route key={i} exact={v.exact} path={v.path} render={()=><GuardRoute {...v}></GuardRoute>}></Route>
            )
          })
        }
      </Router>
  );
}

export default App;
