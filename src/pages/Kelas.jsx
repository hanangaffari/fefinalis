import React from 'react'
import { useStateContext } from "../contexts/ContextProvider";
import {motion}from 'framer-motion'
const Kelas = () => {
    const {currentColor,setKelas,formNama} = useStateContext();
    
  return (
    <div className="mt-20" >
        <div className="flex lg:flex-nowrap justify-center p-15 w-full">
        
         <motion.div className="bg-white dark:text-black dark:bg-secondary-dark-bg 
         rounded-xl w-full lg:w-90  md:p-9 p-1 pt-0 m-3 bg-no-repeat bg-cover bg-center overflow-x-hidden"
         style={{minHeight:"50vh"}}  
         animate={{ y:0 }} initial={{y:-700}} exit={{y:-700}}      
         
          >            
       
              {/* Kelas pertama */}
              <motion.div className="flex bg-slate-50 rounded-2xl dark:bg-black w-full mt-1" 
                          style={{height:"10vh",
                          padding:"3vh"
                      }}
                      
               
                      whileHover={{
                        scale:1.05
                      }}
                      >

                      <p className='dark:text-white font-extrabold' style={{width:"80%",color:currentColor}}>Matematika</p>
                      
                      <button className='dark:text-white 
                      pb-5 p-1 rounded-xl w-20 font-extrabold' style={{backgroundColor: currentColor}}
                      onClick={() => setKelas("Matematika")}
                      >edit</button>
                      <button className='dark:text-white 
                      bg-red-600 pb-5 p-1 rounded-xl w-20 ml-2 font-extrabold'
                      
                      >delete</button>
                      
              </motion.div>
                          
              {/* Kelas kedua */}            
              <motion.div className="flex bg-slate-50 rounded-2xl dark:bg-black w-full mt-1" 
                          style={{height:"10vh",
                          padding:"3vh"}}

                          whileHover={{
                            scale:1.05
                          }}
                          >

                      <p className='dark:text-white font-extrabold' style={{width:"80%",color:currentColor}}>Biology</p>
                      
                      <button className='dark:text-white 
                      pb-5 p-1 rounded-xl w-20 font-extrabold' style={{backgroundColor: currentColor}}
                      onClick={() => {setKelas('Biology')}}
                      >edit</button>
                      <button className='dark:text-white 
                      bg-red-600 pb-5 p-1 rounded-xl w-20 ml-2 font-extrabold'
                      
                      >delete</button>
                      
              </motion.div>

              {/* Kelas tiga */}            
              <motion.div className="flex bg-slate-50 rounded-2xl dark:bg-black w-full mt-1" 
                          style={{height:"10vh",
                          padding:"3vh"}}

                          whileHover={{
                            scale:1.05
                          }}
                          >

                      <p className='dark:text-white font-extrabold' style={{width:"80%",color:currentColor}}>Sejarah</p>
                      
                      <button className='dark:text-white 
                      pb-5 p-1 rounded-xl w-20 font-extrabold' style={{backgroundColor: currentColor}}
                      onClick={() => {setKelas('Sejarah')}}
                      >edit</button>
                      <button className='dark:text-white 
                      bg-red-600 pb-5 p-1 rounded-xl w-20 ml-2 font-extrabold'
                      
                      >delete</button>
                      
              </motion.div>

              

          
        </motion.div>
                
        </div>
    </div>
  )
}

export default Kelas