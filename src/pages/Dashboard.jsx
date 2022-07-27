import { useState } from "react";
import Pro from './../data/avatar.jpg'
import Pro2 from './../data/avatar2.jpg'
import Pro3 from './../data/avatar3.png'
import Pro4 from './../data/avatar4.jpg'
import Pro5 from './../data/avatar5.jpeg'
import Pro6 from './../data/avatar6.jfif'
import Pro7 from './../data/avatar7.jpg'
import Pro8 from './../data/avatar8.jpg'
import {FaArrowRight,FaArrowLeft} from 'react-icons/fa'
import { motion } from "framer-motion";
import { Postname } from "../components/Styles";
import { useStateContext } from "../contexts/ContextProvider";

const Dashboard =  () => {
    const [posisi, setposisi] = useState(0)
    const [klikp, setklikp] = useState(0)
    const{currentColor} = useStateContext();
    return (
        <div className="mt-10">
      <div className="flex lg:flex-nowrap justify-center p-5 w-full">
        <button onClick={() => {
            setposisi(posisi - 455);
            setklikp(klikp + 1);
        }}
        
        ><FaArrowLeft className="dark:text-white"/></button>
        
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg 
        h-64 rounded-xl w-30 lg:w-90  pt-9 m-3 bg-hero-pattern 
        bg-no-repeat bg-cover bg-center overflow-hidden flex"
        
        style={{width:"120vh",maxWidth:"120vh",height:"50vh"}}>
                <div style={{paddingLeft:"1vh"}} className='flex'>
                <motion.div  
                whileHover={{y:-6}}
                whileInView={{y:0,opacity:1}}
                animate={{x:posisi,opacity:0}}
                whileTap={{
                    scale:0.9
                }}
                
                className="bg-slate-50 h-44 rounded-xl
                 w-30 lg:w-60 p-6 m-3 ml-12 dark:bg-black"
                 style={{width:"50vh",height:"30vh"}}
                 >
                    <div className="flex">
                    <img src={Pro} alt='' className='rounded-full w-20 h-20 '/>                                        
                    <div className="w-13 h-14 inline-block pl-2">
                    <div>
                    <h1 className="text-black-450 text-40 font-extrabold float-left" style={{
                        fontSize:"4vh",color:currentColor
                    }}>agus antaro</h1>                                        
                    </div>
                    <h1 className="text-black-450 text-40 font-extrabold float-left"
                    style={{color:currentColor}}
                    >Matematika</h1>                    
                    </div>
                    </div>
                    <div className="w-full flex">                    
                    <h1 className="font-bold" style={{fontSize:"4vh",color:currentColor}}>start time :</h1>
                    <h1 className="" style={{fontSize:"5vh",marginLeft:"1vh",color:currentColor}}>09.30</h1>
                    </div>
                    <div className="w-full flex">                    
                    <h1 className="font-bold" style={{fontSize:"4vh",color:currentColor}}>duration :</h1>
                    <h1 className="" style={{fontSize:"5vh",marginLeft:"1vh",color:currentColor}}>10:00</h1>
                    </div>
                    <div className="h-20 pt-5">
                    <button className="w-full h-10 rounded-xl" style={{backgroundColor:currentColor}}>Start</button>
                    </div>
                </motion.div>   
                <motion.div  
                whileHover={{y:-6}}
                whileInView={{y:0,opacity:1}}
                animate={{x:posisi,opacity:0}}
                whileTap={{
                    scale:0.9
                }}
                
                className="bg-slate-50 h-44 rounded-xl
                 w-30 lg:w-60 p-6 m-3 ml-12 dark:bg-black"
                 style={{width:"50vh",height:"30vh"}}
                 >
                    <div className="flex">
                    <img src={Pro2} alt='' className='rounded-full w-20 h-20 '/>                                        
                    <div className="w-13 h-14 inline-block pl-2">
                    <div>
                    <h1 className="text-black-450 text-40 font-extrabold float-left" style={{
                        fontSize:"4vh",color:currentColor
                    }}>hunnigan</h1>                                        
                    </div>
                    <h1 className="text-black-450 text-40 font-extrabold float-left"
                    style={{color:currentColor}}
                    >Sejarah</h1>                    
                    </div>
                    </div>
                    <div className="w-full flex">                    
                    <h1 className="font-bold" style={{fontSize:"4vh",color:currentColor}}>start time :</h1>
                    <h1 className="" style={{fontSize:"5vh",marginLeft:"1vh",color:currentColor}}>14.00</h1>
                    </div>
                    <div className="w-full flex">                    
                    <h1 className="font-bold" style={{fontSize:"4vh",color:currentColor}}>duration :</h1>
                    <h1 className="" style={{fontSize:"5vh",marginLeft:"1vh",color:currentColor}}>5:00</h1>
                    </div>
                    <div className="h-20 pt-5">
                    <button className="w-full h-10 rounded-xl" style={{backgroundColor:currentColor}}>Start</button>
                    </div>
                </motion.div>
                <motion.div  
                whileHover={{y:-6}}
                whileInView={{y:0,opacity:1}}
                animate={{x:posisi,opacity:0}}
                whileTap={{
                    scale:0.9
                }}
                
                className="bg-slate-50 h-44 rounded-xl
                 w-30 lg:w-60 p-6 m-3 ml-12 dark:bg-black"
                 style={{width:"50vh",height:"30vh"}}
                 >
                    <div className="flex">
                    <img src={Pro6} alt='' className='rounded-full w-20 h-20 '/>                                        
                    <div className="w-13 h-14 inline-block pl-2">
                    <div>
                    <h1 className="text-black-450 text-40 font-extrabold float-left" style={{
                        fontSize:"4vh",color:currentColor
                    }}>mang oleng</h1>                                        
                    </div>
                    <h1 className="text-black-450 text-40 font-extrabold float-left"
                    style={{color:currentColor}}
                    >Cooking</h1>                    
                    </div>
                    </div>
                    <div className="w-full flex">                    
                    <h1 className="font-bold" style={{fontSize:"4vh",color:currentColor}}>start time :</h1>
                    <h1 className="" style={{fontSize:"5vh",marginLeft:"1vh",color:currentColor}}>16.00</h1>
                    </div>
                    <div className="w-full flex">                    
                    <h1 className="font-bold" style={{fontSize:"4vh",color:currentColor}}>duration :</h1>
                    <h1 className="" style={{fontSize:"5vh",marginLeft:"1vh",color:currentColor}}>15:00</h1>
                    </div>
                    <div className="h-20 pt-5">
                    <button className="w-full h-10 rounded-xl" style={{backgroundColor:currentColor}}>Start</button>
                    </div>
                </motion.div>
                <motion.div  
                whileHover={{y:-6}}
                whileInView={{y:0,opacity:1}}
                animate={{x:posisi,opacity:0}}
                whileTap={{
                    scale:0.9
                }}
                
                className="bg-slate-50 h-44 rounded-xl
                 w-30 lg:w-60 p-6 m-3 ml-12 dark:bg-black"
                 style={{width:"50vh",height:"30vh"}}
                 >
                    <div className="flex">
                    <img src={Pro4} alt='' className='rounded-full w-20 h-20 '/>                                        
                    <div className="w-13 h-14 inline-block pl-2">
                    <div>
                    <h1 className="text-black-450 text-40 font-extrabold float-left" style={{
                        fontSize:"4vh",color:currentColor
                    }}>sebastian</h1>                                        
                    </div>
                    <h1 className="text-black-450 text-40 font-extrabold float-left"
                    style={{color:currentColor}}
                    >English</h1>                    
                    </div>
                    </div>
                    <div className="w-full flex">                    
                    <h1 className="font-bold" style={{fontSize:"4vh",color:currentColor}}>start time :</h1>
                    <h1 className="" style={{fontSize:"5vh",marginLeft:"1vh",color:currentColor}}>19.00</h1>
                    </div>
                    <div className="w-full flex">                    
                    <h1 className="font-bold" style={{fontSize:"4vh",color:currentColor}}>duration :</h1>
                    <h1 className="" style={{fontSize:"5vh",marginLeft:"1vh",color:currentColor}}>10:00</h1>
                    </div>
                    <div className="h-20 pt-5">
                    <button className="w-full h-10 rounded-xl" style={{backgroundColor:currentColor}}>Start</button>
                    </div>
                </motion.div>
                <motion.div  
                whileHover={{y:-6}}
                whileInView={{y:0,opacity:1}}
                animate={{x:posisi,opacity:0}}
                whileTap={{
                    scale:0.9
                }}
                
                className="bg-slate-50 h-44 rounded-xl
                 w-30 lg:w-60 p-6 m-3 ml-12 dark:bg-black"
                 style={{width:"50vh",height:"30vh"}}
                 >
                    <div className="flex">
                    <img src={Pro7} alt='' className='rounded-full w-20 h-20 '/>                                        
                    <div className="w-13 h-14 inline-block pl-2">
                    <div>
                    <h1 className="text-black-450 text-40 font-extrabold float-left" style={{
                        fontSize:"4vh",color:currentColor
                    }}>deddy corbuzer</h1>                                        
                    </div>
                    <h1 className="text-black-450 text-40 font-extrabold float-left"
                    style={{color:currentColor}}
                    >Gym</h1>                    
                    </div>
                    </div>
                    <div className="w-full flex">                    
                    <h1 className="font-bold" style={{fontSize:"4vh",color:currentColor}}>start time :</h1>
                    <h1 className="" style={{fontSize:"5vh",marginLeft:"1vh",color:currentColor}}>20.30</h1>
                    </div>
                    <div className="w-full flex">                    
                    <h1 className="font-bold" style={{fontSize:"4vh",color:currentColor}}>duration :</h1>
                    <h1 className="" style={{fontSize:"5vh",marginLeft:"1vh",color:currentColor}}>15:00</h1>
                    </div>
                    <div className="h-20 pt-5">
                    <button className="w-full h-10 rounded-xl" style={{backgroundColor:currentColor}}>Start</button>
                    </div>
                </motion.div>
                <motion.div  
                whileHover={{y:-6}}
                whileInView={{y:0,opacity:1}}
                animate={{x:posisi,opacity:0}}
                whileTap={{
                    scale:0.9
                }}
                
                className="bg-slate-50 h-44 rounded-xl
                 w-30 lg:w-60 p-6 m-3 ml-12 dark:bg-black"
                 style={{width:"50vh",height:"30vh"}}
                 >
                    <div className="flex">
                    <img src={Pro8} alt='' className='rounded-full w-20 h-20 '/>                                        
                    <div className="w-13 h-14 inline-block pl-2">
                    <div>
                    <h1 className="text-black-450 text-40 font-extrabold float-left" style={{
                        fontSize:"4vh",color:currentColor
                    }}>The Rock</h1>                                        
                    </div>
                    <h1 className="text-black-450 text-40 font-extrabold float-left"
                    style={{color:currentColor}}
                    >Gym</h1>                    
                    </div>
                    </div>
                    <div className="w-full flex">                    
                    <h1 className="font-bold" style={{fontSize:"4vh",color:currentColor}}>start time :</h1>
                    <h1 className="" style={{fontSize:"5vh",marginLeft:"1vh",color:currentColor}}>21.00</h1>
                    </div>
                    <div className="w-full flex">                    
                    <h1 className="font-bold" style={{fontSize:"4vh",color:currentColor}}>duration :</h1>
                    <h1 className="" style={{fontSize:"5vh",marginLeft:"1vh",color:currentColor}}>15:00</h1>
                    </div>
                    <div className="h-20 pt-5">
                    <button className="w-full h-10 rounded-xl" style={{backgroundColor:currentColor}}>Start</button>
                    </div>
                </motion.div>
                <motion.div  
                whileHover={{y:-6}}
                whileInView={{y:0,opacity:1}}
                animate={{x:posisi,opacity:0}}
                whileTap={{
                    scale:0.9
                }}
                
                className="bg-slate-50 h-44 rounded-xl
                 w-30 lg:w-60 p-6 m-3 ml-12 dark:bg-black"
                 style={{width:"50vh",height:"30vh"}}
                 >
                    <div className="flex">
                    <img src={Pro3} alt='' className='rounded-full w-20 h-20 '/>                                        
                    <div className="w-13 h-14 inline-block pl-2">
                    <div>
                    <h1 className="text-black-450 text-40 font-extrabold float-left" style={{
                        fontSize:"4vh",color:currentColor
                    }}>john cok</h1>                                        
                    </div>
                    <h1 className="text-black-450 text-40 font-extrabold float-left"
                    style={{color:currentColor}}
                    >coding</h1>                    
                    </div>
                    </div>
                    <div className="w-full flex">                    
                    <h1 className="font-bold" style={{fontSize:"4vh",color:currentColor}}>start time :</h1>
                    <h1 className="" style={{fontSize:"5vh",marginLeft:"1vh",color:currentColor}}>22.00</h1>
                    </div>
                    <div className="w-full flex">                    
                    <h1 className="font-bold" style={{fontSize:"4vh",color:currentColor}}>duration :</h1>
                    <h1 className="" style={{fontSize:"5vh",marginLeft:"1vh",color:currentColor}}>10:00</h1>
                    </div>
                    <div className="h-20 pt-5">
                    <button className="w-full h-10 rounded-xl" style={{backgroundColor:currentColor}}>Start</button>
                    </div>
                </motion.div>
                <motion.div  
                whileHover={{y:-6}}
                whileInView={{y:0,opacity:1}}
                animate={{x:posisi,opacity:0}}
                whileTap={{
                    scale:0.9
                }}
                
                className="bg-slate-50 h-44 rounded-xl
                 w-30 lg:w-60 p-6 m-3 ml-12 dark:bg-black"
                 style={{width:"50vh",height:"30vh"}}
                 >
                    <div className="flex">
                    <img src={Pro5} alt='' className='rounded-full w-20 h-20 '/>                                        
                    <div className="w-13 h-14 inline-block pl-2">
                    <div>
                    <h1 className="text-black-450 text-40 font-extrabold float-left" style={{
                        fontSize:"4vh",color:currentColor
                    }}>mia khalifa</h1>                                        
                    </div>
                    <h1 className="text-black-450 text-40 font-extrabold float-left"
                    style={{color:currentColor}}
                    >Biology</h1>                    
                    </div>
                    </div>
                    <div className="w-full flex">                    
                    <h1 className="font-bold" style={{fontSize:"4vh",color:currentColor}}>start time :</h1>
                    <h1 className="" style={{fontSize:"5vh",marginLeft:"1vh",color:currentColor}}>23.30</h1>
                    </div>
                    <div className="w-full flex">                    
                    <h1 className="font-bold" style={{fontSize:"4vh",color:currentColor}}>duration :</h1>
                    <h1 className="" style={{fontSize:"5vh",marginLeft:"1vh",color:currentColor}}>30:00</h1>
                    </div>
                    <div className="h-20 pt-5">
                    <button className="w-full h-10 rounded-xl" style={{backgroundColor:currentColor}}>Start</button>
                    </div>
                </motion.div>
                
                </div>
        
                </div>
                <button onClick={() => {
                    if(klikp > 0){
            setposisi(posisi + 455);
            setklikp(klikp - 1);
        }
        }}
        ><FaArrowRight className="dark:text-white"/></button>
                
        </div>
        <div className="flex lg:flex-nowrap justify-center p-15 w-full">
        
        <div className="bg-white dark:text-black dark:bg-secondary-dark-bg 
         rounded-xl w-full lg:w-90  p-9 pt-0 m-3 bg-no-repeat bg-cover bg-center "        
        >
                <div style={{paddingLeft:"8vh",paddingRight:"8vh",minHeight:"35vh"}} 
                className=''>
                    {/* di sini post an */}
                    <div className="bg-slate-50 rounded-2xl dark:bg-black" style={{minHeight:"40vh",marginTop:"5%",
                    padding:"3vh"
                }}>
                        
                        <div className="flex ">
                    {/* disini foto profile */}    
                    <img src={Pro} alt='' className='w-10 h-10 rounded-full'/>
                    {/* disini title */}
                    <Postname size={25} style={{fontWeight:"bolder"}} className='dark:text-white'>agus antaro</Postname>
                    </div>
                    {/* disini text dari guru */}                
                    <p className="font-semibold dark:text-white" style={{marginTop:"2vh"}}>
                    Secara etimologis, pendidikan kewarganegaraan berasal dari
                     kata “pendidikan” dan kata “kewarganegaraan”. Pendidikan 
                     berarti usaha sadar dan terencana untuk mewujudkan suasana 
                     belajar dan proses pembelajaran agar peserta didik secara aktif 
                     mengembangkan potensi dirinya, sedangkan kewarganegaraan adalah 
                     segala hal ihwal yang berhubungan dengan warga negara. 
                      Secara yuridis, pendidikan kewarganegaraan dimaksudkan 
                      untuk membentuk peserta didik menjadi manusia yang memiliki 
                      rasa kebangsaan dan cinta tanah air. Secara terminologis, pendidikan 
                      kewarganegaraan adalah program pendidikan yang berintikan demokrasi politik,
                       diperluas dengan sumber-sumber pengetahuan lainnya: pengaruh-pengaruh positif 
                       dari pendidikan sekolah, masyarakat, dan orang tua. Kesemuanya itu diproses guna 
                       melatih para siswa untuk berpikir kritis, analitis, bersikap dan bertindak demokratis 
                       dalam mempersiapkan hidup demokratis berdasarkan Pancasila dan UUD 1945.                     
                    </p>
                    </div>
                    {/* di sini akhir post an */}
                    {/* di sini post an */}
                    <div className="bg-slate-50 rounded-2xl dark:bg-black" style={{minHeight:"40vh",marginTop:"5%",
                    padding:"3vh"
                }}>
                        
                        <div className="flex ">
                    {/* disini foto profile */}    
                    <img src={Pro} alt='' className='w-10 h-10 rounded-full'/>
                    {/* disini title */}
                    <Postname size={25} style={{fontWeight:"bolder"}} className='dark:text-white'>agus antaro</Postname>
                    </div>
                    {/* disini text dari guru */}                
                    <p className="font-semibold dark:text-white" style={{marginTop:"2vh"}}>
                        nak materi untuk ujian udah saya upload ya,jangan lupa belajar                   
                    </p>
                    </div>
                    {/* di sini akhir post an */}
                </div>        
                </div>
                
        </div>
        
        </div>
        
        
        
    );
}

export default Dashboard;