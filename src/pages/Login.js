import {
    StyledInput,
    StyledForm,
    StyledFormda,
    StyledFormBtn,
    StyledRegBtn,
    Wave,
    TextLink,
    StyledLabel,StyledTitle,colors,Avatar,
ButtonGroup,
ExtraText,
StyledButton,
Styledguru,
Styledmurid,
Styledexit,
Styledreg,
Styledreg2,
StyledFormBtn2,
StyledContainer


} from '../components/Styles.js'

import Logo from './../assets/favicon.png';

import { Formik, Form} from 'formik';
import { TextInput } from '../components/FormLib.js';
import {BsLadder, BsPersonSquare} from 'react-icons/bs';
import {HiLockClosed} from 'react-icons/hi';
import {MdAlternateEmail} from 'react-icons/md';
import * as Yup from 'yup';
import {InfinitySpin} from 'react-loader-spinner';

import { connect } from 'react-redux';

import background1 from './../assets/background1.svg'


import { useState } from 'react';
import { motion ,AnimatePresence} from 'framer-motion';

//normal
import folder1z from './../assets/folder1.svg'
import personhand from './../assets/personhand.svg'
import circle from './../assets/circle.svg'
import person from './../assets/person.svg';
import grass from './../assets/grass.svg';
//invert
import folder1zI from './../assets/invert/folder1.svg'
import personhandI from './../assets/invert/personhand.svg'
import circleI from './../assets/invert/circle.svg'
import personI from './../assets/invert/person.svg';
import grassI from './../assets/invert/grass.svg';
import cancel from './../assets/cancel.svg';

//left choice
import personG from './../assets/guru/person.svg';
import lhandG from './../assets/guru/lhand.svg';
import lhandinG from './../assets/guru/lhandin.svg';
import rhandinG from './../assets/guru/rhandin.svg';
import laptopG from './../assets/guru/laptop.svg';
import lheadG from './../assets/guru/head.svg';
import lhairG from './../assets/guru/hair1.svg';
//right choice
import murid from './../assets/mahasiswa/murid.svg';
import personJ from './../assets/mahasiswa/fullperson.svg';
import body2J from './../assets/mahasiswa/body2.svg';
import body3J from './../assets/mahasiswa/body3.svg';
import headJ from './../assets/mahasiswa/head.svg';
import handJ from './../assets/mahasiswa/hand.svg';
import inhandJ from './../assets/mahasiswa/inhand.svg';
import pencilJ from './../assets/mahasiswa/pencil.svg';
import rhandJ from './../assets/mahasiswa/rhand.svg';
import rhandinJ from './../assets/mahasiswa/rhandin.svg';

import axios from '../auth/UserActions'
import { Navigate, useNavigate } from 'react-router-dom';
import { useStateContext } from '../contexts/ContextProvider.js';
import Cookies from 'universal-cookie';


//  import React from 'react';
//import Buatakunz from './../assets/buatakunz.svg';


const Login = () => {
    
    const navigate = useNavigate();
    const [isVisible,setIsVisible] = useState(false);
    const { cookies,setActiveMenu } = useStateContext();

    var a=false;


    let width = window.innerWidth;

    {
        if(width > 966){
        a=true;
    }
}
    
    



    const handleSubmit = async (e,setFieldError,setSubmitting) => {

        console.log(e)        
       
            await axios.post('/auth/sign-in',
            e,
        {
    headers: {
        "Content-Type" : "application/json",

            }
        }).then((response) => {
        console.log(response.status);
        console.log(response)

                     console.log(response);
                     console.log(response.data);
;

                if(response.statusText === "OK"){
                    const {name,role,id_class,uid} = response.data.user;                     
                     console.log(name,role,id_class,uid);
                                                     
                     cookies.set('token',response.data.access_token, { path: '/' });
                     cookies.set('tokenref',response.data.refresh_token, { path: '/' });
                     cookies.set('uid',uid, { path: '/' });
                     cookies.set('class',id_class, { path: '/' });
                     cookies.set('role',role, { path: '/' });
                     cookies.set('name',name, { path: '/' });
                     
                     navigate('/home');
                     setActiveMenu((prevActiveMenu) =>!prevActiveMenu )
                     
                }
                else{
                    console.log("failed");
                }
            setSubmitting(false);
            }).catch(
                (err) => {
                    console.log(err)
                    if(err.response.data.message === 'email and password is not found'){
                setFieldError('email','akun tidak di temukan')
                setFieldError('password','akun tidak di temukan')
                setSubmitting(false);
                }})

    }

    

    
    return( 
        <div className='bg-half-transparent 
        w-screen h-screen fixed nav-item top-0 right-0 p-0'>
        <StyledContainer 
        style={{width:"100%",height:"100%",position:"absolute",top:"0%",zIndex:"1001",backgroundColor:colors.red}}
        
        >
        
        <motion.div animate={{ y:30 }} initial={{y:-100}} 
        style={{width:"100%",display:"flex",justifyContent:"center",position:"fixed",
        top: a ? '5%' : "-1%",height:a ? '':'100%'}}>
            { a && 
            <div style={{width:"30%",height:"650px",maxHeight:"100%"}}>
            <Styledreg style={{width:"30%",height:"650px",maxHeight:"100%",position:"fixed"}}>
            <StyledTitle style={{position:"absolute",color:colors.white,left:"19.3%"
                    ,top:"12%"}}>Belum punya akun ?</StyledTitle>
                    <ExtraText style={{position:"absolute",color:colors.white,left:"20.3%"
                    ,top:"14%"}}>arahin cursor kamu ke sini</ExtraText>
                    
         <div style={{width:"100%",overflow:"hidden"}}>
            {/*  */}
            
             <div style={{position:"absolute",left:"14%",top:"20%"}}>
         <motion.img 
         animate={{ rotate: 360 }}
         transition={{ loop: Infinity,
         ease: "linear",
         duration: 10,}} src={circle}
         style={{width:"70vh"}}/>
         </div>
         <div style={{position:"absolute",top:"33%",width:"100%"}}>
         <motion.img 
          src={person}
         style={{width:"43vh",top:"24vh",marginLeft:"8vh"}}/>  
         </div>
         <div style={{position:"absolute",left:"0%",top:"0%",overflow:"hidden",width:"100%"}}>
         <motion.img src={folder1z} style={{width:"32vh",marginTop:"20vh",marginLeft:"3.5vh"}}
         animate={{y:[-400,10,10,0] ,x:[70,70,70,-400]}}
         transition={{loop:Infinity,duration:3}}
         />     
         </div>
         <div style={{position:"absolute",left:"30vh",top:"32vh",width:"34vh"}}>
         <motion.img animate={{ rotate:[19,19,19,0]}} 
         transition={{yoyo:Infinity,duration:1.5}} src={personhand} style={{backgroundColor:null}}
         />    
         </div>
         <div style={{position:"absolute",left:"0%",top:"22vh",width:"100%",backgroundColor:null}}>
        <motion.img 
         src={grass}
        style={{width:"100%"}}/>  
        </div>
        {/*  */}
         </div>                                                  
                                       
     </Styledreg>
     <Styledreg2 style={{width:"30%",height:"650px",maxHeight:"100%",position:"fixed"}}>
            <StyledTitle style={{position:"absolute",color:colors.white,left:"19.3%"
                    ,top:"12%"}}>Belum punya akun ?</StyledTitle>
                    <ExtraText style={{position:"absolute",color:colors.white,left:"20.3%"
                    ,top:"14%"}}>arahin cursor kamu ke sini</ExtraText>
         <div style={{width:"100%",overflow:"hidden"}}>
             <div style={{position:"absolute",left:"14%",top:"20%"}}>
         <motion.img 
         animate={{ rotate: 360 }}
         transition={{ loop: Infinity,
         ease: "linear",
         duration: 10,}} src={circleI}
         style={{width:"70vh"}}/>
         </div>
         <div style={{position:"absolute",top:"33%",width:"100%",}}>
         <motion.img 
          src={person}
         style={{width:"43vh",top:"24vh",marginLeft:"8vh"}}/>  
         </div>
         <div style={{position:"absolute",left:"0%",top:"0%",overflow:"hidden",width:"100%"}}>
         <motion.img src={folder1zI} style={{width:"60%",marginTop:"38%",marginLeft:"7%"}}
         animate={{y:[-400,10,10,0] ,x:[70,70,70,-400]}}
         transition={{loop:Infinity,duration:3}}
         />     
         </div>
         <div style={{position:"absolute",left:"30vh",top:"32vh",width:"34vh"}}>
         <motion.img animate={{ rotate:[19,19,19,0]}} 
         transition={{yoyo:Infinity,duration:1.5}} src={personhandI} style={{backgroundColor:null}}
         />    
         </div>
         <div style={{position:"absolute",left:"0%",top:"22vh",width:"100%",backgroundColor:null}}>
        <motion.img 
         src={grassI}
        style={{width:"100%"}}/>  
        </div>
         </div>                                                  
                                       
     </Styledreg2>
   
            </div>
            }
        <StyledForm style={{width:a ? '40%' : '',height: a? "650px": "100%",maxHeight:"100%",backgroundColor : a ? '' : colors.white}}
                        className='w-full'

        >
            
            <Avatar image={Logo}></Avatar>
            <StyledTitle size={60} style={{fontWeight:"bold",color:"red"}}>Login</StyledTitle>
            <Formik
            initialValues={{
                email:"",
                password:"",
            }}
            validationSchema={
                Yup.object({
                    email: Yup.string().required("tidak bisa kosong"),
                    password: Yup.string().required("tidak bisa kosong")
                })
            }
            onSubmit={(values,{setSubmitting,setFieldError}) => {
                
                handleSubmit(values,setFieldError,setSubmitting)
            }}
            >
                {({isSubmitting}) => (
                    <Form>
                        <TextInput
                        name="email"
                        type="email"
                        label="Email"
                        placeholder="masukan email"
                        icon={<MdAlternateEmail/>}
                        
                        />
                        <TextInput
                        name="password"
                        type="password"
                        label="Password"
                        placeholder="masukan password"
                        icon={<HiLockClosed/>}
                        />


                        <ButtonGroup >
                            {!isSubmitting && (
                            <StyledFormBtn type='submit' style={{position:"absolute"}}>
                                Login
                            </StyledFormBtn>

                            
                            )}
                           
                       
                    
                                <StyledFormBtn2 type='button' 
                                style={{position:"absolute",left:"20%",zIndex:"10",opacity: a? 1:0                   
                                
                            }} onClick={() => {
                                    setIsVisible(v => !v);
                                }}>
                                    daftar
                                </StyledFormBtn2>
                                
                            

                            {isSubmitting && (
                                <InfinitySpin 
                                color= {colors.red}                                
                                />
                            )}                   
                        </ButtonGroup>
                        {a?'':
                        <div className='flex text-center m-auto' style={{opacity: a? 0:1}}>
                    <ExtraText style={{bottom:"5vh",position:"absolute"}}>daftar sebagai <TextLink to='/registerdosen'>dosen </TextLink> </ExtraText>
                    <ExtraText style={{bottom:"9vh",position:"absolute"}}>daftar sebagai <TextLink to='/registersiswa'>mahasiswa </TextLink> </ExtraText>
                    </div>

                        }
                        
                    </Form>     
                )}
            </Formik>
            
         
        </StyledForm>
        
            
                 
        <AnimatePresence>

        {isVisible ? (            
            <div style={{position:"absolute",left:"10%",width:"80%",height:"100%"}}>                
                <motion.div 
                style={{
                        position:"absolute",
                        backgroundColor:colors.dark1,
                        left:"28%",
                        top:"-7%",
                        borderRadius:"30px 30px 0% 0% ",
                        width:"40%",
                        zIndex:"9"
                        }}
                        animate={{ y:0 }} initial={{y:-700}} exit={{y:-700}}  transition={{duration:0.5}}
                        >
                        <StyledTitle>daftar sebagai :</StyledTitle>
                    </motion.div>
                <motion.div 
                style={{width:"80%",height:"100%",
                position:"fixed",
                zIndex:"10",backgroundColor:colors.white,
                borderRadius:"30px",
                                
                }}
                animate={{ y:0 }} initial={{y:700}} exit={{y:700}}  transition={{duration:0.5}}
                >
                <motion.div style={{width:"4%",marginTop:"-1%",marginLeft:"-1.5%"}}>
                    <motion.img src={cancel} onClick={() => {

                            setIsVisible(v => !v);                                                            
                                }}/>
                    </motion.div>   
                    
                    <div style={{width:"100%",height:"90%",backgroundColor:null,
                    display:"flex",}}>
                        
                    <div style={{width:"43%",height:"100%",margin:"auto"}}
                    
                    >
                        
                    <motion.div style={{height:"8%",
                    position:"absolute",backgroundColor:null,left:"22%",
                    zIndex:"-1"
                    }}>
                        <StyledTitle style={{color:colors.dark2,fontWeight:"bolder"}}>
                            dosen</StyledTitle>
                    </motion.div>

                    <motion.div 
                    style={{backgroundColor:colors.dark1,
                    width:"100%",height:"100%",borderRadius:"5%"}} 
                    whileHover={{                        
                        backgroundColor:colors.dark2,
                        marginTop:"10%"
                    }}

                    onClick={() => {
                        navigate('/registerdosen')                       
                    }}
                    >
                        
                    <motion.img 
                    style={{position:"absolute",backgroundColor:null
                    ,width:"60%",left:"4%",bottom:"24%",pointerEvents:"none"}}
                    animate={{ rotate:[0,0,2,0]}} 
                    transition={{yoyo:Infinity,duration:5}}
                    src={rhandinG}
                    />
                    
                    <motion.img 
                    style={{position:"absolute",left:"13%",top:"44%"}}
                    src={personG}
                    />
                    
                    <motion.img 
                    style={{position:"absolute",backgroundColor:null,
                    width:"40%",left:"23%",bottom:"7%",pointerEvents:"none"}}
                    animate={{ rotate:[3,1,2,0]}} 
                    transition={{yoyo:Infinity,duration:5}}
                    src={lhandinG}
                    />
                    <motion.img 
                    style={{position:"absolute",width:"22%",top:"10%",left:"30%",pointerEvents:"none"}}
                    animate={{ rotate:[3,1,2,0]}} 
                    transition={{yoyo:Infinity,duration:5}}
                    src={lhandG}
                    />
                    <motion.img 
                    style={{position:"absolute",background:null,top:"6.5%",left:"00%",pointerEvents:"none"}}
                    
                    src={laptopG}
                    />

                    <motion.img 
                    style={{position:"absolute",background:null,top:"8.5%",left:"0%",pointerEvents:"none"}}
                    animate={{ rotate:[0,0,0,0,0,3,3,0,0,0]}} 
                    transition={{yoyo:Infinity,duration:12}}
                    src={lheadG}
                    />
                    <motion.img 
                    style={{position:"absolute",background:null,top:"8.5%",left:"1%",pointerEvents:"none"}}
                    animate={{ rotate:[0,0,0,0,0,3,2,0,0,0]}} 
                    transition={{yoyo:Infinity,duration:12}}
                    src={lhairG}
                    />
                    
                </motion.div>
                
                </div>
                <div style={{width:"43%",height:"100%",margin:"auto"}}>
                    <motion.div style={{height:"8%",
                    position:"absolute",backgroundColor:null,left:"69%",
                    zIndex:"-1"
                    }}>
                        <StyledTitle 
                        style={{color:colors.dark2,fontWeight:"bolder"}}>
                            mahasiswa
                            </StyledTitle>
                    </motion.div>

                    
                <motion.div 
                    style={{backgroundColor:colors.dark1,
                    width:"100%",height:"100%",borderRadius:"5%"
                                        
                    }}
                    whileHover={{                        
                        backgroundColor:colors.dark2,                        
                        marginTop:"10%"                                                
                    }}
                    onClick={() => {
                        navigate('/registersiswa')                       
                    }}
                    >
                    
                    <motion.img 
                    style={{backgroundColor:null,
                    width:"30%",top:"67.5%",
                    right:"3%",position:"absolute",pointerEvents:"none"}}
                    animate={{ x:[0,1,9,1]}} 
                    transition={{yoyo:Infinity,duration:3}}
                    src={inhandJ}
                    />

                    <motion.img 
                    style={{backgroundColor:null,
                    width:"50%",top:"48%",
                    right:"11%",position:"absolute",pointerEvents:"none"}}
                    animate={{ x:[0,1,6,1]}} 
                    transition={{yoyo:Infinity,duration:3}}
                    src={handJ}
                    />
                    
                    <motion.img 
                    style={{backgroundColor:null,
                    width:"60%",top:"39%",
                    right:"-10%",position:"absolute",pointerEvents:"none"}}
                    src={body3J}
                    />
                    <motion.img 
                    style={{backgroundColor:null,
                    width:"70%",top:"-27%",
                    right:"-16%",position:"absolute",pointerEvents:"none"}}
                    animate={{ rotate:[0,1.2,1,0,1,2,1,1,2,1,1,2,1]}} 
                    transition={{yoyo:Infinity,duration:12}}
                    src={headJ}
                    />
                    <motion.img 
                    style={{backgroundColor:null,
                    width:"10%",bottom:"20%",
                    right:"3%",position:"absolute",pointerEvents:"none"}}
                    animate={{ 
                        x:[0,1,9,1],
                        rotate:[3,2,1,0,3,2,1,0]
                    }} 
                    transition={{yoyo:Infinity,duration:3}}
                    src={pencilJ}
                    />
                    <motion.img 
                    style={{backgroundColor:null,
                    width:"46%",bottom:"9%",
                    right:"4%",position:"absolute",pointerEvents:"none"}}
                    animate={{x:[0,1,2,4,1,2,1,3,1,0,1]}}
                    transition={{yoyo:Infinity,duration:10}}
                    src={rhandinJ}
                    />
                    <motion.img 
                    style={{backgroundColor:null,
                    width:"46%",bottom:"14%",
                    right:"17%",position:"absolute",pointerEvents:"none"}}
                    
                    transition={{yoyo:Infinity,duration:3}}
                    src={rhandJ}
                    />
                    
                </motion.div>
                </div>
                </div>             
                </motion.div>
                </div>
                
            ): ''
            }
            
            </AnimatePresence>                    
               
   
        </motion.div>    
       
        </StyledContainer>
        </div>
          
    )
}

export default Login;