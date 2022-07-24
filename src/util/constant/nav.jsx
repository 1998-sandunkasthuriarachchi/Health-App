import { MdOutlineDashboard } from 'react-icons/md';
import { ImUsers } from 'react-icons/im';
import { TbStethoscope } from 'react-icons/tb';
import { RiBodyScanLine } from 'react-icons/ri';
import { CgProfile } from 'react-icons/cg';
import { AiOutlinePoweroff } from 'react-icons/ai';

export const menu = [
  {
    title:"Dashboard",
    icon:<MdOutlineDashboard size={30} />,
    path:'/dashboard',
  },
  {
    title:"Profile",
    icon:<CgProfile size={30} />,
    path:'/profile',
  },
  {
    title:"Users",
    icon:<ImUsers size={30} />,
    path:'/users',
    gap:true
  },
  {
    title:"Doctors",
    icon:<TbStethoscope size={30} />,
    path:'/doctors',
  },
  {
    title:"Symptoms",
    icon:<RiBodyScanLine size={30} />,
    path:'/symptoms',
  },
  {
    title:"Log out",
    icon:<AiOutlinePoweroff size={30} className="text-red-500" />,
    path:'/',
    gap:true
  }
]