import React from 'react'
import furniture from '../assets/furniture.jpg';
import furniture2 from '../assets/furniture2.jpg';

import {Link} from "react-scroll";
const NavBar = () => {
    const links= [
        {
          id: 1,
          link: 'home'
        },
        {
          id: 2,
          link: 'about'
        },
        {
          id: 3,
          link: 'Gallery'
        },
      
        {
          id: 5,
          link: 'contacts'
        }
      ];
  return (
     <div>
<div className=' bg-gradient-to-tl from-red-300 to-red-950 h-[84rem] w-full' > 
  <div className='font-signature text-2xl p-7 text-white text-justify cursor-pointer hover:skew-y-2 duration-100'>
          <h1 className='underline'>Yukta's furniture and appliances.</h1>
  </div>
       <div className='mr-20' >
       <div className='mr-80' >
            <div className='ml-20 p-0 mr-80 font-bold text-white hover:text-black  '>
                <h1 className='border border-black shadow-2xl  mr-80 ml-2  border-spacing-10 text-center hover:scale-110 duration-200 cursor-pointer'>Yuki's shop</h1>
            </div>
        </div>
       </div>
  <div className=' p-1 align-items-center text-black'>
    <div className='border-b-2 p-1  ml-80 mr-80 ' >
     <form className='opacity-25 text-black '>
        <input className='Search' placeholder='Search Bar' > 
        </input> 
        </form>
     </div>

<div className="grid grid-rows-3 grid-flow-col gap-10">
  <div className="row-span-7 col-span-10 ...">
   
   <div className=' mt-4 ml-2 text-7xl text-white text-left p-2 animate-fade-down '>
<h1 className='ml-40 p-2 mt-40 hover:translate-x-6 duration-200'>Furniture & interior design</h1>
    </div>
          <div className='ml-10 mt-10 text-white'>Since 1950</div>
   <p className='p-8 ml-55 mr-2 text-white text-justify'>We are involved in the design, manufacture, distribution, and sale of functional and decorative objects of household 
   equipment.We are an American retail furniture company founded in 1885. Beginning with a single store in downtown Atlanta,we have grown to 
   become one of the top furniture retailers in the south and central United States</p>
       <div className='ml-10 mt-10 hover:translate-x-6 duration-200 '>
 <img src={furniture2} alt="picture"/>
      </div>
  </div>
<div className="row-span-4 col-span-10 ...">
 <div div className='p-2 mt-10 mr-10 shadow-black'>
<div>
<ul className=''>
 {links.map(({id, link}) => (
     
<li 
key ={id}
className='px-2 text-right cursor-pointer 
 capitalize text-white text-1.5xl 
  hover:line-through hover:translate-x-6 duration-120'>
 <Link to={link} smooth duration={500}> {link} </Link>
  </li>
  ))}
 </ul>
</div >
</div>
<div className='hover:translate-x-6 hover:scale-102 duration-150'>
 <img src={furniture} alt="picture"/>
 </div>
    <div className='text-7xl text-right mt-40 p-6  text-white '>
 <h1 className='text-right p-2 ml-4 hover:translate-x-6 duration-200'>Objects</h1> </div>
 <p className='text-white mr-4 ml-2'>We are motivated 
 to provide best quality equipments for your house. There
  is no question how wonderfully designed and long-lived 
  our equipments are.</p>
 
  <div className='font-bold text-black bg-white text-center mt-10 ml-80 mr-40 hover:scale-125 duration-200 '>
  <button className='text-center hover:translate-x-6 duration-10  '>Explore</button>
  </div>
  </div>
</div>
</div>
</div>
<div>

</div>
</div>
 );
};

export default NavBar;