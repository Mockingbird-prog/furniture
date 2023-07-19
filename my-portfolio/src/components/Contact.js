import React from 'react'
import logo from '../assets/logo.png';

const Contact = () => {
  return (
    <div>
    <div className='bg-gradient-to-r from-red-900 to-red-950 h-full w-full '>
     
     
      <div className='text-6xl text-white font-semibold ml-8  p-4 border-b mr-40 '> 
      <h1 className= 'mt-10 hover:-translate-y-10 duration-200 '>Let's chat here!</h1>
      </div>
      <div >
<p className=' ml-10 text-white text-left '>The best designed furniture appliances all over Odessa</p>
      </div>
<img className='max-w-xs h-20 ml-20 cursor-pointer' src={logo} alt="picture"/>
   <div>
   <div className='flex justify-center items-center '>

<form action="https://getform.io/f/9ecfc8e0-5c6d-4198-b4c8-e46005a386ed" method="POST">
<div> <h1 className=''>Name:</h1>
    <input
    type="text"
    placeholder='Enter your name'
    className='mt-2 p-2  flex w-80  bg-gradient-to-r from-gray-200 to-orange-400  font-bold text-black'
    />
     </div>
     <div> <h1 className='mt-8 '>E-mail:</h1>
<input
    type="text"
    placeholder='Enter your Email'
    className=' p-2  flex justify-center items-center w-80 bg-gradient-to-r from-gray-200 to-orange-400  font-bold text-black'
    />
</div>
<div> <h1 className='mt-8 w-96 '>Message:</h1>
<textarea 
name="message" 
placeholder='Enter your message.'
rows="5" 
className='p-8 w-96 flex bg-gradient-to-r from-orange-200 to-orange-400 font-bold text-black '>
</textarea>
</div>
<button className='text-black font-bold bg-gradient-to-r from-red-900 to-white
    py-2 mt-12 p-4 w-48 mx-auto flex items-center border-4 rounded-md hover:scale-110 duration-300'>
        Click here to access. 
    </button>

</form>
</div>
   </div>
   
   
    <div class="columns-5 mt-20 p-12 ml-2 gap-6   ">
<div className='text-white  mr-6  p-12  text-2xl'>
    <div>    
        <h1>Contact</h1>
       <p className='text-sm font-thin top-0 font-sans basis-1/5 '>
        +07964586930875<br/>+865482297564385
       <br/>ys123.yukta@gmail.com </p>
       </div>
    
<div className=' '>
        <h1>Site map.</h1>
    <div className='font-thin text-sm '>
  <div>home</div>
  <div>our gallery</div>
  <div>about us</div>
  <div>contact</div>
</div>
   </div>
   
    <div>
        <h1>Get to know us more.</h1>
        <p className='text-sm font-thin'> Your order
            <br/> Your account
            <br/> Information
            <br/>Help </p>
    </div>
  
  
    <div>
        Let us help you. 
        <p className='text-sm font-thin'> Help.
        <br/>Account </p>
    </div>
   
   
    <div>
        Payment methods.
        <p className='text-sm'>Cash
            <br/> Paypal
            <br/>Wels Fargo
        </p>
    </div>
   
    </div>
     </div>
     <div>
        <div>
        <div className='p-12 text-right align-items-right justify-between px-10 '>
  
     <span className="material-symbols-outlined p-6">
send
</span>
<span class="material-symbols-outlined p-6">
mail
</span>
<span class="material-symbols-outlined p-6 ">
call

</span>


</div>
</div>
</div>
     </div>



 </div>

  )
}

export default Contact;
