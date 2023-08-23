'use client'

import Unauthorized from '@/components/Unauthorized'
import { auth } from '@/utils/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'

export default function Home() {
    const [isLoggedIn] = useAuthState(auth)
    return (
        <main className="container mx-auto p-7 px-3 sm:px-7 z-0 relative">
            {isLoggedIn ? <></> : <Unauthorized />}
        </main>
    )
}
