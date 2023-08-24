import { Input } from '@nextui-org/react'
import { useState } from 'react'
import { RiSendPlaneFill } from 'react-icons/ri'

export default function InputMessage() {
    const [message, setMessage] = useState<string>('')
    function onClick(): void {
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
                <RiSendPlaneFill
                    size={17}
                    style={{ cursor: 'pointer' }}
                    onClick={onClick}
                />
            }
        />
    )
}
