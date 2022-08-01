import {
    StyledInput,
    StyledForm,
    StyledFormda,
    StyledFormBtn,
    StyledRegBtn,
    StyledFormreg,
    StyledFormBtnreg,
    Wave,
    TextLink,
    StyledLabel,StyledTitle,colors,Avatar,
ButtonGroup,
ExtraText,
ErrorMsg,
StyledContainer



} from '../components/Styles.js'

import Logo from './../assets/favicon.png';

import { Formik, Form} from 'formik';
import { TextInput } from '../components/FormLib.js';

import * as Yup from 'yup';
import {Bars} from 'react-loader-spinner';


import { Navigate, useNavigate } from 'react-router-dom';

import { motion } from 'framer-motion';



//1
import body from '../assets/sisreg/1/body.svg';
import handl1 from '../assets/sisreg/1/handl1.svg';
import handl2 from '../assets/sisreg/1/handl2.svg';
import pagers2 from '../assets/sisreg/1/pagers2.svg';
import head from '../assets/sisreg/1/head.svg';


//2
import body2 from '../assets/gurureg/2/body.svg';
import coffee from '../assets/gurureg/2/coffee.svg';
import hand2 from '../assets/gurureg/2/hand.svg';
import head2 from '../assets/gurureg/2/head.svg';

//reg

import axios from '../auth/UserActions'
import { useStateContext } from '../contexts/ContextProvider.js';

const Registersis = () => {
   const { setLogin } = useStateContext();
    const navigate = useNavigate();

    var a=false;

    var b=false;

    let width = window.innerWidth;

    {
        if(width < 767){
        a=true;
    }

    if(width < 1148){
        b=true;
    }
}
    
    const handleSubmit = async (e) => {

        console.log(e)
        try {
            const response = await axios.post('/auth/sign-up',
            e,
        {
    headers: {
        "Content-Type" : "application/json"

            }
        });
        console.log(response.status);
        console.log(response)
                if(response.statusText === "Created"){

                    console.log("succes");
                    console.log(e);                
                    console.log(e.id_class);
                    setLogin(e.name,e.role,e.id_class);
                    navigate('/home');
                }else{
                    console.log("failed");
                }
            
        } catch (error) {
            console.log(error.response.data)
        }
    }

    return( 
        <div className='bg-half-transparent 
        w-screen h-screen fixed nav-item top-0 right-0 p-0 md:p-10 '>
        <StyledContainer 
        style={{width:"100%",height:"100%",position:"absolute",top:"0%",zIndex:"1001"}}
        className='w-screen fixed nav-item top-0 right-0'
        >

            {/* animasi 1 */}
            <div style={{left:"5vh",position:"absolute",zIndex:'-1',top:"-30vh",opacity: b? 0:1}}>
            <motion.img 
                    style={{backgroundColor:null
                    ,width:"90vh",pointerEvents:"none"}}
                    animate={{ rotate:[-52,-52,-52]}} 
                    src={body}
                    />
                    </div>



            <motion.div style={{left:"27vh",position:"absolute",zIndex:'-1',top:"-25vh",
            opacity: b? 0:1,pointerEvents:"none",zIndex:"2",
                        }}
                        animate={{ rotate:[-52,-48,-52]}} 
                        transition={{
                            yoyo:Infinity,
                            duration:10
                        }}
                        >
            <motion.img 
                    style={{backgroundColor:null
                    ,width:"15vh",pointerEvents:"none",}}
                    
                    
                    src={handl2}
                    />
            </motion.div>

            <motion.div style={{left:"17vh",position:"absolute",zIndex:'-1',top:"-11vh",
            opacity: b? 0:1,pointerEvents:"none",zIndex:"2",
                        }}
                        animate={{ rotate:[-72,-78,-72]}} 
                        transition={{
                            yoyo:Infinity,
                            duration:10
                        }}
                        >
            <motion.img 
                    style={{backgroundColor:null
                    ,width:"30vh",pointerEvents:"none",}}
                    
                    
                    src={pagers2}
                    />
            </motion.div>

            
            <motion.div style={{left:"8vh",position:"absolute",zIndex:'-1',top:"-17vh",
            opacity: b? 0:1,pointerEvents:"none",zIndex:"2",
                        }}
                        animate={{ rotate:[-52,-48,-52]}} 
                        transition={{
                            yoyo:Infinity,
                            duration:10
                        }}
                        >
            <motion.img 
                    style={{backgroundColor:null
                    ,width:"20vh",pointerEvents:"none",}}
                    
                    
                    src={handl1}
                    />
            </motion.div>

            <motion.div style={{left:"10vh",position:"absolute",zIndex:'-1',top:"0vh",
            opacity: b? 0:1,pointerEvents:"none",zIndex:"2",
                        }}
                        animate={{ rotate:[-52,-48,-52,-53,-47,-43,-47,-45,-50]}} 
                        transition={{
                            yoyo:Infinity,
                            duration:18
                        }}
                        >
            <motion.img 
                    style={{backgroundColor:null
                    ,width:"20vh",pointerEvents:"none",}}
                    
                    
                    src={head}
                    />
            </motion.div>

            

           

             {/* animasi 2 */}
             <div style={{right:"30vh",position:"absolute",zIndex:'-1',bottom:"-15vh",opacity: b? 0:1,pointerEvents:"none"}}>
            <motion.img 
                    style={{backgroundColor:null
                    ,width:"40vh",pointerEvents:"none"}}
                    animate={{ rotate:[52,52,52]}} 
                    src={body2}
                    />
                    </div>

                    <div style={{right:"12vh",position:"absolute",zIndex:'1',bottom:"13vh",opacity: b? 0:1,pointerEvents:"none"}}>
                    <motion.img 
                    style={{backgroundColor:null
                    ,width:"30vh",pointerEvents:"none"}}
                    animate={{ rotate:[38,50,42,46,42,40,46,49,48,52]}} 
                    transition={{
                        yoyo:Infinity,
                        duration:25
                    }}
                    src={coffee}
                    />
                    </div>

                    <div style={{right:"9vh",position:"absolute",zIndex:'-1',bottom:"21vh",opacity: b? 0:1,pointerEvents:"none"}}>
                    <motion.img 
                    style={{backgroundColor:null
                    ,width:"60vh",pointerEvents:"none"}}
                    animate={{ rotate:[49,49,49]}} 
                    src={hand2}
                    />
                    </div>

                    <div style={{right:"11vh",position:"absolute",zIndex:'-1',bottom:"38vh",opacity: b? 0:1,pointerEvents:"none"}}>
                    <motion.img 
                    style={{backgroundColor:null
                    ,width:"20vh",pointerEvents:"none"}}
                    animate={{ rotate:[52,52,52]}} 
                    src={head2}
                    />
                    </div>


            <div className='overflow-auto h-screen'>
            
        <StyledForm 
        //style={{width:"40%",margin:"auto"}}
        style={{backgroundColor: a ? colors.white : ''}}
        className='w-full md:w-1/2 m-auto'
        >
                <img src={Logo} style={{width:"15vh",margin:"auto"}}/>
                <StyledTitle color={colors.red} size={50}
                style={{fontWeight:"bolder"}}
                >
                    daftar</StyledTitle>
    
                <Formik 
                enableReinitialize
                
                initialValues={{
                    role:"student",
                    id_class:"",
                    email:"",
                    name:"",
                    password:"",                    
                    confirm_password:"",
                    
                    
                }}
                validationSchema={
                    Yup.object({
                        role : Yup.string(),
                        id_class: Yup.string().required("tidak bisa kosong"),
                        email: Yup.string().required("tidak bisa kosong"), 
                        name: Yup.string()
                        .required("tidak bisa kosong"),                        
                        password : Yup.string().min(8, "kata sandi terlalu pendek")
                        .required("tidak bisa kosong"),                       
                        confirm_password: Yup.string().required("tidak bisa kosong"),                        
                         
                        /*
                        NamaMahasiswa: Yup.string()
                        .required("tidak bisa kosong").max(30,'maksimal 30 huruf').matches(/^(?=.*[a-z])/, 'Harus mengandung setidaknya satu karakter huruf kecil')
                        .matches(/^(?=.*[A-Z])/, 'Harus mengandung setidaknya satu karakter huruf Besar'),
                        Username: Yup.string()
                        .required("tidak bisa kosong").matches(/^[a-z\s]+$/, "Hanya huruf kecil yang diperbolehkan untuk kolom ini"),
                        password : Yup.string().min(8, "kata sandi terlalu pendek")
                        .required("tidak bisa kosong")
                        .matches(/^(?=.*[a-z])/, 'Harus mengandung setidaknya satu karakter huruf kecil')
                        .matches(/^(?=.*[A-Z])/, 'Harus mengandung setidaknya satu karakter huruf Besar')
                        .matches(/^(?=.*[0-9])/, 'Harus mengandung setidaknya satu nomor')
                        .matches(/^(?=.*[!@#\$%\^&\_=()*])/, 'Harus mengandung setidaknya satu karakter khusus'),
                        NIM: Yup.string().required("tidak bisa kosong").max(10,'maksimal 10 angka'),
                        confirm_password: Yup.string().required("tidak bisa kosong").
                        oneOf([Yup.ref("password")],"password tidak sama"),
                        FotoMahasiswa: Yup.mixed().required("tidak bisa kosong"),
                        Foto64 : Yup.string(),  
                        */                     
                    })
                }


 

                
                onSubmit={(values,{setSubmitting,setFieldError}) => {
                    values.role='Dosen';
                    console.log(values)
                    handleSubmit(values)
                }}
                >
                    {({isSubmitting}) => (
                        <Form   onChange={() => {
                                console.log(width);
                                    
                                     }
                        
                       }    >
                        
                           <ErrorMsg id='bigimg' style={{position:"absolute",marginTop:"27%",marginLeft:"15%",zIndex:"1",
                                visibility:"hidden",fontSize:"80%"
                            }}>
                               image too big</ErrorMsg>
                           <ErrorMsg id='unsupimg' style={{position:"absolute",marginTop:"27%",
                           marginLeft:"15%",zIndex:"1",
                                visibility:"hidden",fontSize:"80%"
                            }}>
                               unsuported image type</ErrorMsg>

                           <TextInput 
                           name="name" 
                           type="text" 
                           label="name"
                           placeholder="name"
                           
                           />

                            <TextInput 
                           name="email" 
                           type="text" 
                           label="email"
                           placeholder="email"
                           />

                           <TextInput 
                           name="id_class" 
                           type="text" 
                           label="id class"
                           placeholder="id class"
                           onKeyDown={ 
                            (evt) => evt.key === 'e' && evt.preventDefault()
                           ||evt.key === '.' && evt.preventDefault() || evt.key === ',' && evt.preventDefault() }
                           i/>
                           
                            
                           <TextInput
                           name="password" 
                           type="password" 
                           label="password"
                           placeholder="password"
                           />

                           <TextInput
                           name="confirm_password" 
                           type="password" 
                           label="repeat password"
                           placeholder="repeat password"
                           />                            

                           <ButtonGroup>
                               {!isSubmitting &&<StyledFormBtn                              
                                 type='submit'
                                 className='w-full sm:bg-red-400'
                                 >
                               <p style={{fontSize:"80%"}}>   Daftar</p>
                               </StyledFormBtn> } 
                               
                                                        
                {isSubmitting && (
                    <Bars
                 
                    color= {colors.red}
                    height={49}
                    width={100}
                    />                    
                )}    
                           </ButtonGroup>
                           <ExtraText >sudah punya akun?
                    <TextLink to="/login">login</TextLink>                    
                               </ExtraText> 
                        </Form>
                    )}
                </Formik>
                
            </StyledForm>
            </div>
            </StyledContainer>

            </div>
          
    )
}

export default Registersis;