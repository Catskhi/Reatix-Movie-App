import React from 'react';
import { BsCompass, BsHouse } from 'react-icons/bs';
import SideBarItem from './SideBarItem';

export interface ISideBarProps {
}

export default function SideBar (props: ISideBarProps) {
  return (
    <div className='fixed z-50 w-screen  text-slate-50 
    bg-primary bottom-0 flex justify-center
    md:w-52 md:h-screen md:flex md:flex-col md:justify-start md:top-0 md:pt-2
    pt-2

    transition-all duration-300 sidebar
        '>
            <SideBarItem title='Home' icon={<BsHouse/>} id='home'/>
            <SideBarItem title='Discovery' icon={<BsCompass/>} id='discovery'/>
    </div>
  );
}
