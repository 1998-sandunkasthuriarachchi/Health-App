import React, {useState} from "react";

import { IoMdNotificationsOutline } from 'react-icons/io';

import logo from '../../../assets/logo.png';

const Appbar = () =>{

    return(
        <div className="flex justify-between items-center h-24 shadow-md rounded-lg px-4 text-black bg-white">
           <h1 className="text-lg">
              Hello Good Morning!
            </h1>
            <ul className="flex gap-x-2">
                <li><div className=" bg-gray-200 rounded-full p-3 mx-1 cursor-pointer"><IoMdNotificationsOutline size={20} /></div> </li>
                <li><img src={logo} className={`cursor-pointer duration-500 w-11 ` }/></li>
            </ul>
            
        </div>
    );
}

export default Appbar;