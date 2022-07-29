import React from 'react';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import {FiSettings} from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import {Navbar,Sidebar,ThemeSettings,Soalujian} from './components';
import {Calendar,Kanban,ColorPicker,Editor,Dashboard,Matakuliah,Line,Login,Home} from './pages';

import { useStateContext } from './contexts/ContextProvider';
const App = () => {
  const {activeMenu,themeSettings,
     setThemeSettings,currentColor,currentMode,ujianSoal} = useStateContext();

  
  return (
    <BrowserRouter>
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
    
      <div className='flex relative dark:bg-main-dark-bg'>
        <div className='fixed right-4 bottom-4' style={{zIndex:'1000'}}>
          <TooltipComponent content='Settings' position='Top'>
            <button type='button' className='text-3xl p-3 hover:drop-shadow-xl
            hover:bg-light-gray text-white'
            onClick={() => setThemeSettings(true)}
            style={{background:currentColor,
            borderRadius:'50%'
            }}>
              <FiSettings />
            </button>
          </TooltipComponent>
        </div>
        {activeMenu ? (
      <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
        <Sidebar />
      </div>  
      ): (<div className='w-0 dark:bg-secondary-dark-bg'>
      <Sidebar />
      </div>
      )}
      <div className={
        `dark:bg-main-dark-bg bg-main-bg min-h-screen 
        w-full 
        ${activeMenu ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  ' : 
        'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '}`
         }>
        <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
          <Navbar />
        </div>
      
      <div>
      {ujianSoal && <Soalujian />}
         {themeSettings && <ThemeSettings />}
        <Routes>
          {/* dahboard */}
          
          <Route path='/home' element={<Dashboard />}/>                    
         
          {/* pages */}
          <Route path='/history' element={<Matakuliah />}/>
          
          <Route path='/order' element="eorder"/>
          {/* Apps */}
          <Route path='/kanban' element={<Kanban />}/>
          <Route path='/editor' element={<Editor />}/>
          <Route path='/calendar' element={<Calendar />}/>
          <Route path='/colorpicker' element={<ColorPicker />}/>

          {/* charts */}
          <Route path='/Line' element={<Line />}/>
          
          
        </Routes>
      </div>
      
      </div>
      
      </div>
      <Routes>
      <Route path='/login' element={<Login />}/>
      <Route path='/' element={<Home />}/>
      </Routes>
      
      
    </div>
    </BrowserRouter>
  )
}

export default App