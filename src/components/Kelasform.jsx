import React from 'react';

import { useStateContext } from '../contexts/ContextProvider';
import { motion } from "framer-motion";

import cancel from '../assets/cancel.svg'
import cancel2 from '../assets/cancel2.svg'

const Kelasform = () => {
  const {currentColor,setKelas,setForm,kelasNama} = useStateContext();
  

  return (
    
    <div className='bg-half-transparent 
    w-screen h-screen fixed nav-item top-0 right-0 p-0 md:p-10 '>
      
      <motion.div className='w-full h-full dark:text-gray-200  
      bg-white dark:bg-main-dark-bg rounded-xl'
      animate={{ y:0 }} initial={{y:-700}} exit={{y:-700}}  transition={{duration:0.5}}
      >
        
        <div onClick={() => setKelas(null)}>
        <img src={cancel2} className='w-5 h-5 absolute md:top-8 md:left-8 rounded-xl' 
        style={{backgroundColor:currentColor}}
        />
        </div>
       <form> 
      {/* awal edit kelas*/}
      <div className='p-3' style={{width:"100%",minHeight:"25vh"}}>
        <div className=' bg-slate-200 w-full h-full rounded-xl font-bold p-4 dark:bg-black'>
        <div className='flex'>
          <div className='md:flex' style={{height:"3.5vh",width:"70%"}}>
          <h1 className='mr-3'>nama kelas :</h1>          
          <input type='text' placeholder={kelasNama} className='rounded-xl pl-2 dark:bg-secondary-dark-bg'/>
          </div>
          <div className='text-center md:flex'>
          <h1>invite link :</h1><h1>22002</h1>
          </div>
          </div>
          <div className='mt-3'>
          <h1 className='mr-3 font-extrabold '>Deskripsi :</h1> 
          <textarea placeholder='masukan deskripsi' className='w-full rounded-xl p-2 dark:bg-secondary-dark-bg' style={{height:"10vh"}}>
          </textarea>         
          </div>
           </div>           
      </div>
      <div className='w-full flex justify-center pl-3 pr-3' >
      <button 
      
      className='bg-slate-200 rounded-xl p-4 w-full dark:bg-black font-extrabold'
      > 
      submit
      </button>
      </div>
      </form>
      {/* akhir edit kelas*/}
      
     
      {/*awal form*/}
      <div className='p-2'>
        <p className='font-extrabold ml-5'>Form yang telah di upload :</p>
      <div className='bg-slate-200 h-56 md:h-72  pl-2 pr-2 pt-1 rounded-xl overflow-auto dark:bg-secondary-dark-bg'>
        {/* daftar form */}
      <div className="flex bg-slate-50 rounded-2xl dark:bg-black w-full mb-1" 
                    style={{height:"10vh",
                    padding:"3vh"
                }}>

                <p className='dark:text-white font-extrabold' style={{width:"80%"}}>Tugas 1</p>
                
                <button className='dark:text-white 
                 pb-5 p-1 rounded-xl w-20 font-extrabold' style={{backgroundColor: currentColor}}
                 onClick={() => {setForm('Tugas 1')}}
                >edit</button>
                 <button className='dark:text-white 
                bg-red-600 pb-5 p-1 rounded-xl w-20 ml-2 font-extrabold'
                
                >delete</button>
                
        </div>

        <div className="flex bg-slate-50 rounded-2xl dark:bg-black w-full mb-1 " 
                    style={{height:"10vh",
                    padding:"3vh"
                }}>

                <p className='dark:text-white font-extrabold' style={{width:"80%"}}>Tugas 2</p>
                
                <button className='dark:text-white 
                 pb-5 p-1 rounded-xl w-20 font-extrabold' style={{backgroundColor: currentColor}}
                 onClick={() => {setForm('Tugas 2')}}
                >edit</button>
                 <button className='dark:text-white 
                bg-red-600 pb-5 p-1 rounded-xl w-20 ml-2 font-extrabold'
                
                >delete</button>
                
        </div>


        {/* daftar form */}
      </div>
      <button 
      
      className='bg-slate-200 rounded-xl p-2 w-52 dark:bg-black mt-3 font-extrabold'
      > 
      add form 
      </button>
      </div>
       {/*akhir form  */}
                  
      </motion.div>
      
    </div>
  )
}

export default Kelasform;