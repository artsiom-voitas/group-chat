import { Card, CardBody, CardHeader } from '@nextui-org/react'
import { getAuth } from 'firebase/auth'
import Image from 'next/image'
import { FetchedMessages } from './Messages'

interface MessageProps {
    message: FetchedMessages
}

export default function Message({ message }: MessageProps) {
    const auth = getAuth()
    const userId = auth.currentUser?.uid

    return (
        <div
            className={`flex items-center ${
                userId === message.uid ? 'justify-end' : 'justify-start'
            }`}>
            {userId !== message.uid && (
                <Image
                    width={30}
                    height={30}
                    className="mr-2 w-auto h-auto rounded-3xl"
                    src={message.avatar}
                    alt={`${message.name} avatar`}
                />
            )}
            <Card
                isBlurred
                className={`border-none bg-background/60 dark:bg-default-100/50 max-w-[50%] h-auto w-fit`}
                shadow="sm">
                {userId !== message.uid && (
                    <CardHeader className="text-[9px] pt-1 pb-0 opacity-70">
                        {message.name}
                    </CardHeader>
                )}
                <CardBody
                    className={`text-xs sm:text-sm ${userId === message.uid ? 'p-3' : 'p-3 py-1'}`}>
                    {message.text}
                </CardBody>
            </Card>
        </div>
    )
}
