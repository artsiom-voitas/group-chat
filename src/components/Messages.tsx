import { Message, ScrollToBottom } from '@/components'
import { db } from '@/utils/firebase'
import { Timestamp, collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import { useEffect, useState } from 'react'

export interface FetchedMessages {
    avatar: string
    createdAt: Timestamp
    id: string
    name: string
    text: string
    uid: string
}

export default function Messages() {
    const [messages, setMessages] = useState<FetchedMessages[]>([])

    useEffect(() => {
        const q = query(collection(db, 'messages'), orderBy('createdAt', 'asc'))
        const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
            const fetchedMessages: any[] = []
            QuerySnapshot.forEach((doc) => {
                fetchedMessages.push({ ...doc.data(), id: doc.id })
            })
            setMessages(fetchedMessages)
        })
        return () => {
            unsubscribe
        }
    }, [])

    return (
        <div className="flex flex-col gap-3 py-4">
            {messages.map((message) => (
                <Message
                    key={message.id}
                    message={message}
                />
            ))}
            <ScrollToBottom />
        </div>
    )
}
