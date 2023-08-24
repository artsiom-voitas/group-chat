'use client'

import { InputMessage } from '@/components'
import { auth } from '@/utils/firebase'
import { Card, CardBody, CardFooter } from '@nextui-org/react'
import { redirect } from 'next/navigation'
import { useAuthState } from 'react-firebase-hooks/auth'

export default function Page() {
    const [isLoggedIn] = useAuthState(auth)

    // if (!isLoggedIn) {
    //     redirect('/')
    // }

    return (
        <main className="container mx-auto z-0 relative">
            <Card className="w-full flex flex-col justify-between py-0 px-3 sm:px-7 ">
                <CardBody className="min-h-[calc(100vh-157px)]"></CardBody>
                <CardFooter className="max-h-[64px] pb-2">
                    <InputMessage />
                </CardFooter>
            </Card>
        </main>
    )
}
