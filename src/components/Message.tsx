import { Card, CardBody, CardHeader, Skeleton } from '@nextui-org/react'
import { getAuth } from 'firebase/auth'
import Image from 'next/image'
import { FetchedMessages } from './Messages'

interface MessageProps {
    message: FetchedMessages
    isLoaded: boolean
}

export default function Message({ message, isLoaded }: MessageProps) {
    const auth = getAuth()
    const userId = auth.currentUser?.uid

    return (
        <div
            className={`flex items-center ${
                userId === message.uid ? 'justify-end' : 'justify-start'
            }`}>
            {userId !== message.uid && (
                <Skeleton
                    isLoaded={isLoaded}
                    className="mr-2 rounded-3xl">
                    <Image
                        width={30}
                        height={30}
                        src={message.avatar}
                        alt={`${message.name} avatar`}
                    />
                </Skeleton>
            )}
            <Card
                isBlurred
                className={`border-none bg-background/60 dark:bg-default-100/50 max-w-[50%] h-auto w-fit`}
                shadow="sm">
                {userId !== message.uid && (
                    <Skeleton isLoaded={isLoaded}>
                        <CardHeader className="text-[9px] pt-1 pb-0 opacity-70">
                            {message.name}
                        </CardHeader>
                    </Skeleton>
                )}
                <Skeleton isLoaded={isLoaded}>
                    <CardBody
                        className={`text-xs sm:text-sm ${
                            userId === message.uid ? 'p-3' : 'p-3 py-1'
                        }`}>
                        {message.text}
                    </CardBody>
                </Skeleton>
            </Card>
        </div>
    )
}
