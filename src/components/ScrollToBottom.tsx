import { useEffect, useRef } from 'react'

export default function ScrollToBottom() {
    const elementRef = useRef<null | HTMLDivElement>(null)
    useEffect(() => {
        if (elementRef.current) {
            elementRef.current.scrollIntoView()
        }
    })
    return <div ref={elementRef} />
}
