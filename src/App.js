import React from 'react';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import {FiSettings} from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import {Navbar,Sidebar,} from './components';
import {Calendar,Kanban,ColorPicker,Editor,Home} from './pages'

import { useStateContext } from './contexts/ContextProvider';
const App = () => {
  const {activeMenu} = useStateContext(true);

  
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
        <Sidebar />
      </div>  
      ): (<div className='w-0 dark:bg-secondary-dark-bg'>
      <Sidebar />
      </div>
      )}
      <div className={
        `dark:bg-main-bg bg-main-bg min-h-scree 
        w-full ${activeMenu ? 'md:ml-72' : 'flex'}`
         }>
        <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
          <Navbar />
        </div>
      </div>
      <div>
        <Routes>
          {/* dahboard */}
          <Route path='/' element={<Home />}/>
          <Route path='/' element=""/>
          {/* pages */}
          <Route path='/order' element="eorder"/>
          <Route path='/order' element="eorder"/>
          <Route path='/order' element="eorder"/>
          {/* Apps */}
          <Route path='/kanban' element={<Kanban />}/>
          <Route path='/editor' element={<Editor />}/>
          <Route path='/calender' element={<Calendar />}/>
          <Route path='/colorpicker' element={<ColorPicker />}/>

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