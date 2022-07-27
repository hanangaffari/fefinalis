import {StyledContainer} from './components/Styles';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Login from './pages/Login'
import App from './App'

import  Kanban  from './pages/Kanban';
import  Matakuliah  from './pages/Matakuliah';
import  Editor  from './pages/Editor';
import  Calendar  from './pages/Calendar';
import  ColorPicker  from './pages/ColorPicker';
import  Line  from './pages/Line';

import{
  BrowserRouter as Router,
  Routes,
  Route
}from 'react-router-dom';



function Appril() {
  return (
    <div>
    <Router>
    <StyledContainer>
    <Routes>       
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/" element={<Home/>} />
      
      
      
      {/* dahboard */}
      <Route path='/home' element={<App />}/>  
        <Route path='/dashboard' element={<Dashboard />}/>
        
         
         {/* pages */}
         <Route path='/matakuliah' element={<Matakuliah />}/>
         
         <Route path='/order' element="eorder"/>
         {/* Apps */}
         <Route path='/kanban' element={<Kanban />}/>
         <Route path='/editor' element={<Editor />}/>
         <Route path='/calendar' element={
         <Calendar />
         }/>
         <Route path='/colorpicker' element={<ColorPicker />}/>

         {/* charts */}
         <Route path='/Line' element={<Line />}/>
         
      <Route path="/login" element={<Login/>} /> 
      <Route path="/Appril" element={<Appril/>} /> 
      
      </Routes> 
      </StyledContainer>
      
   
    </Router>
    
    </div>
  );
}

export default Appril;
