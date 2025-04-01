import Link from 'next/link'
import React from 'react'

export default function NavLink({title, link}:any) {
  return (
    
    <li
    className=''>
        <Link
        href={link}
        className="hover:opacity-70 duration-200 ease-in-out"
        >
            {title}

        </Link>
    </li>


  )
}
