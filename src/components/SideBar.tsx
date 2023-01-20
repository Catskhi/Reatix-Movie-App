import React, { ReactComponentElement, ReactNode } from 'react';
import { IconType } from 'react-icons';
import {BsHouseFill} from 'react-icons/bs'

export interface ISideBarProps {
}

export default function SideBar (props: ISideBarProps) {
  return (
    <div className='fixed bg-zinc-800 top-0 left-0
        h-screen  w-36  text-slate-50
            flex items-center
        '>
            <div className='shrink-0'>
                <SideBarIcon icon={<BsHouseFill/>}/> 
            </div>
            <div>
                <IconTitle title={'Home'} />
            </div>
    </div>
  );
}

interface ISideBarIcon {
    icon: ReactNode,
}

function SideBarIcon ({icon} : ISideBarIcon) {
    return (
        <div className='sidebar-icon'>
            {icon}
        </div>
    )
}

interface IconTitleInterface {
    title: string
}

function IconTitle ({title} : IconTitleInterface) {
    return (
        <div className='text-xl mt-4'>
            {title}
        </div>
    )
}
