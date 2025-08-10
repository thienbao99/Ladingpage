import Image from 'next/image'
import React from 'react'

export default function Banner() {
    return (
        <div className='flex h-screen bg-[#e6e6e6]'>
            <div className='w-1/2 flex flex-col items-center justify-center'>
                <div className="w-1/2">
                    <h1 className='text-[50px] text-black-300 leading-[1.15]'>
                        Get ready to
                    </h1>
                    <h1 className='text-[50px] text-black leading-[1.15]'>
                        supercharge
                    </h1>
                    <h1 className='text-[50px] text-black-300 leading-[1.15]'>
                        your goal- setting and planning .
                        
                    </h1>
                </div>
                <div className='h-[50px] w-2/3 mt-10 relative'>
                    <input className='w-full pl-5 h-full rounded-3xl outline-none' placeholder='Enter your email' />
                    <button className='absolute right-0 h-full bg-black rounded-3xl text-white w-[150px]'>Register</button>
                </div>
            </div>
            <div className='w-1/2 relative'>
                <Image fill src="https://img.freepik.com/free-vector/hand-drawn-bodyguard-illustration_23-2150299888.jpg?size=626&ext=jpg&ga=GA1.1.1141335507.1719100800&semt=ais_user" />
            </div>
        </div>
    )
}
