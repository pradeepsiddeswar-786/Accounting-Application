import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
// import Client from './Components/Client/Client';
import ResponsiveAppBar from './Components/Navbar/Navbar';
import Dashboard from './Components/Dashboard/Dashboard';
import Sidebar from './Components/Sidebar/Sidebar';

function App(props) {
  return (
    
    <>
            <ResponsiveAppBar/>
            <Sidebar />

        <BrowserRouter>

        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="/dashboard" element={< Dashboard/>} />
            <Route path="/employee" element={<employee/>} />
          </Route>
        </Routes>


        </BrowserRouter> 


    </>
  );
}

export default App;
