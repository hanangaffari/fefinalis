import React, {createContext,useContext,useState } from 'react';

const StateContext = createContext();
const initialState = {
    chat:false,
    cart:false,
    userProfile:false,
    notification:false
}

export const ContextProvider = ({children}) => {
    const [activeMenu, setActiveMenu] = useState(false);
    const [isClicked, setIsClicked] = useState(initialState);
    const [currentColor, setcurrentColor] = useState('#03c9d7');
    const [currentMode, setcurrentMode] = useState('Light');
    const [themeSettings, setThemeSettings] = useState(false);

    //ujian
    const [ujianDurasi, setujianDurasi] = useState();
    const [ujianNama, setujianNama] = useState();
    const [ujianSoal, setujianSoal] = useState();
    //ujian end
    //edit kelas
    const [kelasNama, setkelasNama] = useState();
    //edit kelas end
     //edit Form
     const [formNama, setformNama] = useState();
     //edit Form end
     //Login
     const [akunNama, setakunNama] = useState()
     const [akunRole, setakunRole] = useState()
     const [akunClass, setakunClass] = useState()

    
    
    const setMode = (e) => {
        setcurrentMode(e.target.value);

        localStorage.setItem('ThemeMode',e.target.value)
        setThemeSettings(false)
    }

    const setColor= (e) => {
        setcurrentColor(e);

        localStorage.setItem('ColorMode',e)
         setThemeSettings(false)   
    }

    const setUjian= (a,b,c) => {
        setujianDurasi(a);
        setujianNama(b);
        setujianSoal(c);

        //localStorage.setItem('ColorMode',e)
  
    }

    const setLogin= (a,b,c) => {
       setakunNama(a);
       setakunRole(b);
       setakunClass(c);


        //localStorage.setItem('ColorMode',e)
  
    }

    const setKelas= (a) => {
        setkelasNama(a);
        
    }

    const setForm= (a) => {
        setformNama(a);
  
    }

    const handleClick =(clicked) => {
        setIsClicked({...initialState,[clicked]:true});
    }
    const [screenSize, setscreenSize] = useState(undefined)

    
    return (
    <StateContext.Provider value={{
        activeMenu,setActiveMenu,
        isClicked,setIsClicked,
        handleClick,
        screenSize,setscreenSize,
        currentColor,currentMode,
        setcurrentColor,setcurrentMode,
        themeSettings,setThemeSettings,
        setColor,setMode,
        ujianSoal,setujianSoal,setUjian,
        ujianDurasi,setujianDurasi,
        ujianNama,setujianNama,
        kelasNama,setkelasNama,setKelas,
        formNama,setformNama,setForm,
        akunNama,setakunNama,
        akunClass,setakunClass,
        akunRole,setakunNama,setLogin
        }}>
        {children}
    </StateContext.Provider>
    );
};

export const useStateContext = () => useContext(StateContext);