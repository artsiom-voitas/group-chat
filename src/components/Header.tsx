'use client'
import { LoginButton, ThemeSwitcher } from '@/components'

export default function Header() {
    return (
        <header className="p-7 md:px-14 flex justify-between items-center border-b-1 sticky top-0 z-10 bg-white dark:bg-black">
            <ThemeSwitcher />
            <h1 className="text-xl sm:text-2xl font-bold">2319 Messenger</h1>
            <LoginButton />
        </header>
    )
}
