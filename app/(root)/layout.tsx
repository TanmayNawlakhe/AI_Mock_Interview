import { isAunthenticated } from '@/lib/actions/auth.action'
import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import React, { ReactNode } from 'react'

const Rootlayout =async ({children} : {children :ReactNode}) => {

  const isUserAuthenticated = await isAunthenticated();

  if(!isUserAuthenticated) redirect('/sign-in');
  
  return (
    <div className='root-layout'>
      <nav>
        <Link href="/" className='flex items-center gap-2'>
        <Image src="/logo.svg" alt='logo' width={38} height={32} />
        <h2 className='text-primary-100'>InterPrep</h2>
        </Link>
      </nav>
      {children}

    </div>
  )
}

export default Rootlayout