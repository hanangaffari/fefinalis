import React from 'react';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import {FiSettings} from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';


const App = () => {
  const activeMenu = false;
  return (
    <div>
      <BrowserRouter>
      <div className='flex relative dark:bg-main-dark-bg'>
        <div className='fixed right-4 bottom-4' style={{zIndex:'1000'}}>
          <TooltipComponent content='settings' position='top'>
            <button type='button' className='text-3xl p-3 hover:drop-shadow-xl
            hover:bg-light-gray text-white'
            style={{background:'blue',
            borderRadius:'50%'
            }}>
              <FiSettings />
            </button>
          </TooltipComponent>
        </div>
        {activeMenu ? (
      <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
        sidebar
      </div>  
      ): (<div className='w-0 dark:bg-secondary-dark-bg'>
      sidebar w-0
      </div>
      )}
      <div className={
        `dark:bg-main-bg bg-main-bg min-h-scree 
        w-full ${activeMenu ? 'md:ml-72' : 'flex'}`
         }>
        <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
          navbar
        </div>
      </div>
      <div>
        <Routes>
          {/* dahboard */}
          <Route path='/' element="ecommerce"/>
          <Route path='/' element="ecommerce"/>
          {/* pages */}
          <Route path='/order' element="eorder"/>
          <Route path='/order' element="eorder"/>
          <Route path='/order' element="eorder"/>
          {/* Apps */}
          <Route path='/kanban' element="Kanban"/>
          <Route path='/editor' element="editor"/>
          <Route path='/calender' element="calender"/>
          <Route path='/colorpicker' element="colorpicker"/>

          {/* charts */}
          <Route path='/colorpicker' element="colorpicker"/>
          <Route path='/colorpicker' element="colorpicker"/>
          
        </Routes>
      </div>
      </div>
      </BrowserRouter>
    </div>
  )
}

export default App