import { auth, db } from '@/utils/firebase'
import { Input } from '@nextui-org/react'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { RiSendPlaneFill } from 'react-icons/ri'

export default function InputMessage() {
    const [message, setMessage] = useState<string>('')

    async function sendMessage(): Promise<void> {
        if (message.trim() === '') {
            return
        }
        if (auth.currentUser) {
            const { uid, displayName, photoURL } = auth.currentUser
            await addDoc(collection(db, 'messages'), {
                text: message,
                name: displayName,
                avatar: photoURL,
                createdAt: serverTimestamp(),
                uid
            })
        }
        setMessage('')
    }

    return (
        <Input
            type="text"
            variant="bordered"
            value={message}
            onValueChange={setMessage}
            placeholder="Enter your message"
            className="w-full"
            endContent={
                <motion.div whileTap={{ scale: 0.85 }}>
                    <RiSendPlaneFill
                        size={17}
                        style={{ cursor: 'pointer' }}
                        onClick={sendMessage}
                    />
                </motion.div>
            }
        />
    )
}
