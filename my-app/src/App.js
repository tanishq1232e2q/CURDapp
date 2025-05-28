import logo from './logo.svg';
import './App.css';

import{ BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import User from './components/Getuser/User.js';
import Add from './Adduser/Add.js';
import Edit from './Updateuser/Edit.js';

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<User/>}></Route>
          <Route path="/add" element={<Add/>}></Route>
          <Route path="/edit/:id" element={<Edit/>}></Route>
        </Routes>


      </Router>
    </div>
  );
}

export default App;
