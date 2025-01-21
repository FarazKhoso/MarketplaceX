import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

const ShoppingCart = () => {
  return (
    <div className='h-[1055px] w-screen md:h-[769px] flex flex-col md:flex-row '>
      <div className='h-[380px] md:h-full w-full '>
        <Image 
          src={"/Image Left.svg"}  
          alt='this is image' 
          height={380}
          width={390}
          className='md:h-[759px] md:w-[721px]'
          />
      </div>
      <div className='h-[675px] md:h-full w-full p-6 py-8'>
        
        <div className='h-full w-full flex flex-col gap-8 md:px-12 md:justify-end'>

        <div className='h-[74px] w-[188px] md:w-[281px] flex flex-col justify-between'> 
            <p className='text-2xl md:text-[36px]'>The Dandy Chair</p>
            <p className='text-xl md:text-2xl'>£250</p>
        </div>


        <div className='h-[193px] md:h-[251px] w-full flex flex-col justify-between md:justify-evenly'>
            <p className='text-[16px]'><span className='md:hidden'>Product</span> Description</p>
            <p className='text-sm md:text-[16px] text-[#505977]'>A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.</p>
            
            <ul className='ml-6 text-sm md:text-[16px] text-[#505977]'>
                <li>Premium material</li> 
                <li>Handmade upholstery</li>
                <li>Quality timeless classic</li>
            </ul>
        </div>

        <div className='h-[94px] md:h-[99px] w-full md:w-[241px] flex flex-col justify-between'>
            <p className='text-[16px]'>Dimensions</p>

            <div className='w-full h-[56px] flex justify-between items-center'>
                <div className=' h-full flex flex-col justify-between'>
                    <h6 className='text-sm'>Height</h6>
                    <p className='text-sm text-[#505977]'>110cm</p>
                </div>
                <div className='h-10 w-[2px] bg-[#EBE8F4]'></div>

                <div className=' h-full flex flex-col justify-between'>
                    <h6 className='text-sm'>Height</h6>
                    <p className='text-sm text-[#505977]'>110cm</p>
                </div>
                 <div className='h-10 w-[2px] bg-[#EBE8F4]'></div>

                <div className=' h-full flex flex-col justify-between'>
                    <h6 className='text-sm'>Height</h6>
                    <p className='text-sm text-[#505977]'>110cm</p>
                </div>
                
            </div>
        </div>

        <div className='h-[150px] flex flex-col justify-between'>
         <div className='h-40 flex flex-col justify-between'>
            <p className='text-[16px] md:hidden'>Quantitity</p>
          
          <div className='md:h-[118px] h-[117px] w-full flex flex-col justify-between md:flex-row md:justify-between md:px-7 md:items-center'>
            <div className='h-[46px] w-full md:w-[209px] bg-[#F9F9F9] flex justify-center items-center gap-10'>
            
            <div className='hidden md:block bg-white w-[87px] h-full '>
            <div className='flex items-center h-full'>
              <p>Amount:</p>
            </div>
            </div>
            <div className='w-[122px] flex justify-around items-center'>  
               <p className='text-[#505977]'>-</p>
                <p>1</p>
                <p className='text-[#505977]'>+</p>
                </div> 
            </div>
<Link href={'/components/Shopping_baskets/'}>
         <button className='h-[56px] w-full md:w-[143px] bg-Dark text-white text-[16px] '>Add to cart</button></Link>
         </div>
         </div>
        </div>
        </div>
      </div>
      </div>
    
  )
}

export default ShoppingCart
