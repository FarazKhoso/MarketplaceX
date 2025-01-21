import Image from 'next/image'
import React from 'react'

const Cart= () => {
  return (
    <div className='w-screen h-[729px] md:h-[749px] flex flex-col justify-center items-center '>
  
  <h2 className='text-xl ml-7 self-start md:ml-44 md:my-14 md:text-[34px]'>Your shopping cart</h2>

<div className='hidden md:block w-[1064px] space-y-2'>
  <div className=' flex justify-between md:w-full  '>
    <p className='text-sm'>Product</p>
    <p className='text-sm w-80 text-end'>Quantity</p>
    <p className='text-sm'>Total</p>
  </div>
  <div className='w-full h-[2px] bg-[#EBE8F4]'></div>
  </div>

  <div className='py-10 grid grid-cols-1 md:grid-cols-8 md:gap-9  gap-8 md:w-[1064px]'>

<div className='h-[166px] md:h-[134px] w-[334px] md:w-[309px] flex justify-between md:col-span-5'>

<Image src={'/Product Image.svg'} alt='' height={166} width={133} className='md:h-[134px] md:w-[109px]'/>
    <div className='w-[179px] h-full flex flex-col justify-between'>

        <div className='flex flex-col justify-between md:justify-evenly  md:h-full h-[104px] '>
            <h5 className='md:text-[22px]'>Graystone vase</h5>
            <p className='text-sm'>A timeless ceramic vase with 
            a tri color grey glaze.</p>
            <p className='text-lg'>£85</p>
        </div>

        <div className='md:hidden h-[46px] w-[122px] flex justify-center items-center '>
            <p>1</p>
        </div>

    </div>

</div>

    <div className='hidden md:block  col-span-2'> <p>1</p></div>
    <div className='hidden md:block text-end text-xl'><p>£85</p></div>


<div className='h-[166px] md:h-[134px] w-[334px] md:w-[309px] flex justify-between md:col-span-5'>

<Image src={'/Product Image (1).svg'} alt='' height={166} width={133} className='md:h-[134px] md:w-[109px]'/>
    <div className='w-[179px] h-full flex flex-col justify-between'>

        <div className='flex flex-col justify-between md:justify-evenly  md:h-full h-[104px] '>
            <h5 className='md:text-[22px]'>Basic white vase</h5>
            <p className='text-sm'>Beautiful and simple this is
one for the classics</p>
            <p className='text-lg'>£85</p>
        </div>

        <div className='md:hidden h-[46px] w-[122px] flex justify-center items-center '>
            <p>1</p>
        </div>
    </div>

</div>
    <div className='hidden md:block  col-span-2'> <p>1</p></div>
    <div className='hidden md:block text-end text-xl'><p>£85</p></div>

  </div>

  <div className='hidden md:block w-[1064px] h-[2px] bg-[#EBE8F4]'></div>




<div className='h-[160px] w-full md:w-[698px] flex flex-col justify-between md:justify-evenly items-center md:self-end'>

<div className='flex flex-col justify-between items-end  ml-12 '>

<div className='w-[150px] h-[34px] flex justify-between items-center '>
    <h4 className='text-xl text-[#4E4D93]'>Subtotal</h4>
    <h3 className='text-2xl text-Dark'>£210</h3>
</div>

<p className='text-sm text-[#4E4D93]'>Taxes and shipping are calculated at checkout</p>

</div>

<div className='h-[56px] w-[342px] md:text-end'>
    <button className='bg-Dark h-full w-full md:w-[172px] text-white'>Go to checkout</button>
</div>

</div>

    </div>
  )
}

export default Cart
