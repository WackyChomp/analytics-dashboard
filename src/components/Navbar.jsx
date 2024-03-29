import React, { useEffect } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import avatar from '../data/avatar.jpg';
import { Cart, Chat, Notification, UserProfile } from '.';
import { useStateContext } from '../contexts/ContextProvider';
import { BiWindowOpen } from 'react-icons/bi';


const NavButton = ( {title, customFunc, icon, color, dotColor} ) => (
  <TooltipComponent content={title} position='BottomCenter'>
    <button type='button' onClick={customFunc}
    style={{ color }}
    className='relative text-xl rounded-full p-3 hover:bg-light-gray'
    >
      <span style={{background: dotColor}}
      className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2'
      >
      </span>
      {icon}
    </button>
  </TooltipComponent>
)

const Navbar = () => {
  const { activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick, screenSize, setscreenSize } = useStateContext();
  
  useEffect(()=>{
    const handleResize = () => setscreenSize(window.innerWidth);
      window.addEventListener('resize', handleResize);
      handleResize();
      return () => window.removeEventListener('resize', handleResize);
    }, []);

  useEffect(()=>{
    if(screenSize <= 800){
      setActiveMenu(false);
    } else{
      setActiveMenu(true);
    }
  }, [screenSize]);
  
  return (
    <div className='flex justify-between p-2 md:mx-6 relative'>
      <NavButton 
        title='Menu' 
        customFunc={()=> setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
        color='green'
        icon={<AiOutlineMenu />}
      />

      <div className="flex">
        <NavButton
          title='Cart' 
          customFunc={() => handleClick('cart')}
          color='salmon'
          icon={<FiShoppingCart/>}
        />
        <NavButton
          title='Chat' 
          customFunc={() => handleClick('chat')}
          color='salmon'
          dotColor='#03C9D7'
          icon={<BsChatLeft/>}
        />
        <NavButton
          title='Notifications' 
          customFunc={() => handleClick('notification')}
          color='salmon'
          icon={<RiNotification3Line/>}
        />
        <TooltipComponent
          content='Profile'
          position='BottomCenter'
        >
          <div className='flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg'
          onClick={() => handleClick('userProfile')}>
            <img src="https://images.squarespace-cdn.com/content/v1/55f97542e4b0bd73ff1920e7/0edde3f1-f4b4-4a10-86fc-b4f17c3bbbd5/Bobby_Biolo_0918_HiRes.jpg" 
            className='rounded-full w-8 h-8' alt="picture of profile" />
            <p>
              <span className='text-gray-400 text-14'>Hi, </span> {' '}
              <span className='text-gray-400 text-14 font-bold ml-1'>Jonathan</span>
            </p>
          </div>
        </TooltipComponent>

        {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.notification && <Notification />}
        {isClicked.userProfile && <UserProfile />}
      </div>
    </div>
  )
}

export default Navbar