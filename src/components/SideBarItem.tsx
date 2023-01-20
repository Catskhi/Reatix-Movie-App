import React, {ReactNode} from 'react';


export interface ISideBarItemProps {
    icon ?: ReactNode,
    title ?: string,
    id ?: string
}

export default function SideBarItem ({icon, title, id}: ISideBarItemProps) {
  return (
    <a href={'#' + id!} id={id} className='flex text-xl
            rounded-md m-1 mx-2 mb-3
            md:mx-3
            cursor-pointer
            outline-none
            group

            transition-all duration-300
            '>
                <div className='w-0.5
                    hidden
                    rounded-xl
                    md:block
                    md:bg-transparent
                    group-hover:bg-red-500
                    group-target:bg-red-500
                    transition-all duration-300
                '/>
                <div className='
                    md:hidden
                    absolute bottom-3
                    w-9 h-0.5 mt-10
                    group-hover:bg-red-500
                    bg-transparent
                    rounded-xl
                    transition-all duration-300
                '/>
                <div className='shrink-0 sidebar-icon'>
                    <SideBarIcon icon={icon}/> 
                </div>
                <div>
                    <IconTitle title={title}/>
                </div>
            </a>
  );
}

function SideBarIcon ({icon} : ISideBarItemProps) : JSX.Element {
    return (
        <div className='p-1'>
            {icon}
        </div>
    )
}

function IconTitle ({title} : ISideBarItemProps) : JSX.Element {
    return (
        <div className='
        mt-1 mb-1 select-none hidden
        md:block
        '>
            {title}
        </div>
    )
}
