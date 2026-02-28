



import React from 'react'

import {LogoutButtonProps} from '../types'
import { useRouter } from 'next/navigation'
import { signOut } from 'next-auth/react'

const LogOutButton=({children}: LogoutButtonProps)=>{
    
    const router=useRouter()

    const onLogOut=async()=>{
        await signOut()
        router.refresh()
    }
    
    return(
        <span className='cursor-pointer' 
        onClick={onLogOut}>
            {children}
        </span>
    )
}

export default LogOutButton