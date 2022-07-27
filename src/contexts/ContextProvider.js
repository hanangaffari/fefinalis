import React, {createContext,useContext,useState } from 'react';

const StateContext = createContext();
const initialState = {
    chat:false,
    cart:false,
    userProfile:false,
    notification:false
}

export const ContextProvider = ({children}) => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(initialState);
    const [currentColor, setcurrentColor] = useState('#03c9d7');
    const [currentMode, setcurrentMode] = useState('Light');
    const [themeSettings, setThemeSettings] = useState(false);
    
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
        setColor,setMode
        }}>
        {children}
    </StateContext.Provider>
    );
};

export const useStateContext = () => useContext(StateContext);