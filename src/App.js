import React from 'react';
import './App.css';
import Navbar from './componentes/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Estudiantes from './paginas/Estudiantes';
import Docente from './paginas/Docentes/Docentes';
import Materias from './paginas/Materias';
import home from './paginas/home';
import verHorarios from './paginas/Docentes/verHorarios';
import ProgramarHorarios from './paginas/Docentes/ProgramarHorarios';


function App() {
  return (
    <>    
      <Router>
      <Navbar />
      <Switch>
      <Route path='/' exact component={home}/>
      <Route path='/Estudiantes' component={Estudiantes}/>
      <Route path='/Docentes' component={Docente}/>
      <Route path='/Materias' component={Materias}/>
      <Route path='/verHorarios' component={verHorarios}/>
      <Route path='/ProgramarHorarios' component={ProgramarHorarios}/>
      </Switch> 
      </Router>    </>
  );
}

export default App;