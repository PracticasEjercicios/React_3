import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Navbar } from 'react-materialize';
import Principal from './Principal';
import Saludar from './Saludar';

class App extends Component {
  render() {
    return (
      <div>
         <BrowserRouter>
            <div>

               <Navbar left>
                  <li>
                     <Link to="/">
                        Principal
                     </Link>
                  </li>
                  <li>
                     <Link to="/saludar">
                        Vamos a saludar
                     </Link>
                  </li>
               </Navbar>

               
               <br />
               

               <div className="container">
                  <Route exact path="/" component={Principal} />
                  <Route exact path="/saludar" component={Saludar} />
               </div>

            </div>
         </BrowserRouter>
      </div>
    );
  }
}

export default App;
