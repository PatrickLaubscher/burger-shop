import React from 'react'
import NavLink from './NavLink'
import Image from 'next/image'
import Link from 'next/link'
import { MagnifyingGlassIcon, ShoppingCartIcon, UserIcon } from '@heroicons/react/16/solid'

export default function Nav() {
  return (

    <nav
    className='w-10/12 mx-auto py-10 text-white flex justify-between'
    >
        <Link
        className='w-auto'
        href={'/'}
        >
            <Image
            src={'/images/logo.png'}
            alt='logo du site'
            width={60}
            height={60}
            />
        
        </Link>


        <ul
        className='flex justify-between items-center gap-8'>

            <NavLink
            title={'Home'}
            link={'/'}
            />

            <NavLink
            title={'Menu'}
            link={'/'}
            />

            <NavLink
            title={'About'}
            link={'/'}
            />

            <NavLink
            title={'Shop'}
            link={'/'}
            />

        </ul>

        <ul
        className='flex justify-between items-center gap-4'>

            <li 
            className=''
            >
                <Link
                href={'/'}
                >
                    <MagnifyingGlassIcon className='size-6 text-white hover:opacity-70 duration-200'/>

                </Link>
            </li>

            <li 
            className=''
            >
                <Link
                href={'/'}
                >
                    <UserIcon className='size-6 text-white hover:opacity-70 duration-200'/>

                </Link>
            </li>

            <li 
            className=''
            >
                <Link
                href={'/'}
                >
                    <ShoppingCartIcon className='size-6 text-white hover:opacity-70 duration-200'/>

                </Link>
            </li>

        </ul>
    

    </nav>


  )
}

