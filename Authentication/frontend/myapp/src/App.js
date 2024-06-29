import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
      </Switch>
    </div>
  );
};

export default App;



// import './App.css';

// function App() {
//   return (
//     <>
//     <div>
//       <p>This is para 1</p>
//     </div>
//     </>
//   );
// }

// export default App;
