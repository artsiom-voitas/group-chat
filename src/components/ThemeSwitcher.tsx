'use client'

import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

interface ThemeVariants {
    theme: string
    name: string
}

const themeVariants: ThemeVariants[] = [
    {
        theme: 'light',
        name: 'Light'
    },
    {
        theme: 'dark',
        name: 'Dark'
    },
    {
        theme: 'system',
        name: 'System'
    }
]

export function ThemeSwitcher() {
    const { theme, setTheme } = useTheme()

    return (
        <Dropdown>
            <DropdownTrigger>
                <Button
                    variant="ghost"
                    isIconOnly>
                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </DropdownTrigger>
            <DropdownMenu
                aria-label="Static Actions"
                disabledKeys={[`${theme}`]}>
                {themeVariants.map((variant) => (
                    <DropdownItem
                        key={variant.theme}
                        onClick={() => setTheme(variant.theme)}>
                        {variant.name}
                    </DropdownItem>
                ))}
            </DropdownMenu>
        </Dropdown>
    )
}
