import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Header() {
    const menus = [
        {
            name: 'Home',
            link: '/'
        },
        {
            name: 'About',
            link: '/about'
        },
        {
            name: 'Services',
            link: '/services'
        },
        {
            name: 'Contact',
            link: '/contact'
        }
    ]
    return (
        <div className='flex justify-between items-center px-8'>
            <div>
                <Image alt='logo' width={80} height={80} src="data:image/png;base64,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" />
            </div>
            <div className='flex items-center gap-8'>
                {
                    menus.map((menu, index) => (
                        <Link key={index} href={menu.link}>
                            {menu.name}
                        </Link>
                    )
                    )}
            </div>
            <div>
                <button className='bg-slate-200 text-black px-4 py-2 rounded-2xl'>Register</button>
            </div>
        </div>
    )
}
