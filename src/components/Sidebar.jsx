import React from 'react';
import {Link,NavLink} from 'react-router-dom';
import { SiShopware} from 'react-icons/si';
import {MdOutlineCancel} from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { Avatar } from './Styles';

import {links} from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

import Logo from './../assets/favicon.png';

const Sidebar = () => {

  const {activeMenu,setActiveMenu,screenSize,currentColor} = useStateContext();
  const activeLink = 'flex items.center gap-5 pl-4 pt-2 pb-2 rounded-lg text-white text-md m-2';
  const normalLink = 'flex items.center gap-5 pl-4 pt-2 pb-2 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2'

  const handleCloseSideBar = () => {
    if(activeMenu && screenSize <= 900){

    }
  }
  return (
    <div className='ml-3 h-screen md:overflow-hidden overflow-auto 
    md:hover:overflow-auto pb-10'>
      {activeMenu && (<>
      <div className='flex justify-between items-center'>
        <Link to='/home' onClick={handleCloseSideBar} 
        className='items-center gap-3 ml-3 mt-4 flex container text-xl 
        font-extrabold -tracking-tight dark:text-white text-slate-900'>
          <img src={Logo} style={{width:"5vh"}}/>
          <span>Telkom-U</span>
        </Link>
        <TooltipComponent content='Menu' position='BottomCenter'>
          <button type='button' onClick={() => 
           setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
          className='text-xl rounded-full p-3 dark:text-white  mt-4 block'
          >
            <MdOutlineCancel />
          </button>
        </TooltipComponent>
      </div>
      <div className='mt-10 '>
          {links.map((item) => (
            <div >              
              <p className='text-gray-400 m3 mt-4 uppercase'>
              {item.title}
              </p>
              {item.links.map((link) => (
                <NavLink to={`/${link.name}`}
                key={link.name}
                onClick={handleCloseSideBar}


                style={({isActive}) => ({backgroundColor: isActive ? currentColor : ''})}
                

                className={({isActive}) => (isActive ? activeLink : normalLink)
                }
                >
                  {link.icon}
                  <span className='capitalize'>
                    {link.name}
                  </span>
                </NavLink>
              ))}
            </div>
          ))}
      </div>
      </>)}
      </div>
  )
}

export default Sidebar