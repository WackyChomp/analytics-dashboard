import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { Navbar, Footer, Sidebar, AppColorTheme, ThemeSettings } from './components';
import { Area,Bar,ColorMapping,Financial,Line,Pie,Pyramid,Stacked ,
Calendar,ColorThemes,Customers,Ecommerce,Editor,Employees,Orders,Kanban } from './pages';
import { useStateContext } from './contexts/ContextProvider';

import './App.css';

const App = () => {
  const { activeMenu, currentColor, currentMode, themeSettings, setThemeSettings } = useStateContext();

  return (
    <h1 className='underline text-3xl'>The Title</h1>,
    <h1 className='underline text-3xl'>The tTitle</h1>,
    <h2 className='underline text-3xl'> happy</h2>,

    <div className={currentMode === "Dark" ? 'dark' : ''}>
      <BrowserRouter>
        <div className='flex relative dark:bg-main-dark-bg'>
          <div className='fixed right-4 bottom-4' style={ {zIndex: '1000'} }>
            <TooltipComponent content='Settings' position='Top'>
              <button 
              type='button' 
              className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white'
              style = { {background: 'crimson' , borderRadius: '50%'}}
              onClick={() => setThemeSettings(true)}>   {/* becomes true when clicked */}
                <FiSettings/>
              </button>  
            </TooltipComponent>            
          </div>

          
          {activeMenu ?(
            <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
              <Sidebar/>
            </div>

          ):(
            <div className='w-0 dark:bg-secondary-dark-bg'>
              <Sidebar/>
            </div>
          )}

          <div className={ 
            `dark:bg-main-dark-bg bg-main-bg min-h-screen w-full 
            ${activeMenu ? 'md:ml-72': 'flex-2'}`
            }>
            <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
              <Navbar/>
            </div>

          <div>
            {themeSettings && <ThemeSettings />}      {/* ThemeSettings only shows if true */}
            
            <Routes>
              {/* Main Dashboard */}
              <Route path="/" element={<Ecommerce />} />
              <Route path="/ecommerce" element={<Ecommerce />} />

              {/* Pages */}
              <Route path="/customers" element={<Customers />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/employees" element={<Employees />} />
              <Route path="/partners" element="Partners" />

              {/* Applications */}
              <Route path="/editor" element={<Editor />} />
              <Route path="/color-themes" element={<ColorThemes />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/kanban" element={<Kanban />} />

              {/* Data Visualizations */}
              <Route path="/area" element={<Area />} />
              <Route path="/bar" element="Bar" />
              <Route path="/color-mapping" element="ColorMapping" />
              <Route path="/financial" element="Financial" />
              <Route path="/line" element={<Line />} />
              <Route path="/pie" element="Pie" />
              <Route path="/pyramid" element="Pyramid" />
              <Route path="/stacked" element="Stacked" />
            </Routes>
          </div>
          </div>
        </div>
      </BrowserRouter>

    </div>

  )
}

export default App