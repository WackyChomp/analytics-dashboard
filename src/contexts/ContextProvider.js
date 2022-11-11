import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
}

export const ContextProvider = ({ children}) => {
    const [activeMenu, setActiveMenu] = useState(true);

    const [isClicked, setIsClicked] = useState(initialState);

    const [screenSize, setscreenSize] = useState(undefined);

    const [currentColor, setCurrentColor] = useState('#03c9D7');
    const [currentMode, setCurrentMode] = useState('Light');
    const [themeSettings, setThemeSettings] = useState(false);

    const handleClick = (clicked) =>{
        setIsClicked( {...initialState, [clicked]:true});
    }

    const setColor = (color) =>{
        setCurrentColor(color);
        localStorage.setItem('colorMode', color)
        setThemeSettings(false);        {/* closes themesetting menu when color is selected */}
    }
    const setMode = (e) =>{
        setCurrentMode(e.target.value);
        localStorage.setItem('themeMode', e.target.value)
        setThemeSettings(false);        {/* closes themesetting menu when mode is selected */}
    }


    return (
        <StateContext.Provider 
            value ={{ 
                activeMenu, setActiveMenu,
                isClicked, setIsClicked,
                handleClick,
                screenSize, setscreenSize,
                currentColor, setCurrentColor,
                currentMode, setCurrentMode,
                themeSettings, setThemeSettings,
                setColor, setMode
            }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);