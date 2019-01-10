import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Mesa from './Mesa/Mesa';
import Cuadros from './Cuadros/Cuadros';
import Contadores from './Contadores/Contadores';

class App extends Component {
  render() {
    return (
      <div>
         <BrowserRouter>
            <div>
               <Header />
               <br />
               <div className="container">
                  <Route exact path='/mesa' component={Mesa} />
                  <Route exact path='/cuadros' component={Cuadros} />
                  <Route exact path='/contadores' component={Contadores} />
               </div>
            </div>
         </BrowserRouter>
      </div>
    );
  }
}

export default App;
