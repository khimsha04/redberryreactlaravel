import { useState } from 'react';
import './App.css';
import Redberry from "./Components/Images/Redberry.png"
import background from "./Components/Images/backgroung.png"
import Logo from "./Components/Images/logo.png"
import { Routes,Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import SecondPage from './Components/SecondPage/SecondPage';

function App() {

  const [route,setRoute]=useState(false);
  
    if(route){
      return(
        <BrowserRouter>
          <Routes>
              <Route index element={<SecondPage />}/>
          </Routes>
        </BrowserRouter>
      )
    }
  return(
    <div>
        

        <div>
        <img className="backgroundimg" src={background} alt="background"/>
        </div>
        <div>
            <img className="Redberry" src={Redberry} alt="Redberry"/>
            <p className="resume">ᲠᲔᲖᲘᲣᲛᲔᲔᲑᲘ</p>
            <div className="Line"></div>
        </div>
        <div>
           
                <button onClick={()=>{setRoute(true)}}  className="button" >რეზიუმეს დამატება</button>
                {/* <Link className="button" to="SecondPage">category</Link> */}
        </div>
        <div>
            <img className="Logo" src={Logo} alt='logoimg'/>
        </div>
    </div>
      );     
}

export default App;
