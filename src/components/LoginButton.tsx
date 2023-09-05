import { auth } from '@/utils/firebase'
import {
    Button,
    Modal,
    ModalBody,
    ModalContent,
    ModalHeader,
    useDisclosure
} from '@nextui-org/react'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { LogIn, LogOut } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useAuthState } from 'react-firebase-hooks/auth'
import { BsGoogle } from 'react-icons/bs'

export default function LoginButton() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure()
    const [isLoggedIn] = useAuthState(auth)
    const router = useRouter()

    function signInWithGoogle(): void {
        const provider = new GoogleAuthProvider()
        signInWithPopup(auth, provider)
    }
    function signOut(): void {
        auth.signOut()
        router.replace('/')
    }

    return (
        <>
            {isLoggedIn ? (
                <Button
                    onClick={signOut}
                    variant="ghost"
                    isIconOnly>
                    <LogOut />
                </Button>
            ) : (
                <>
                    <Button
                        onPress={onOpen}
                        variant="ghost"
                        isIconOnly>
                        <LogIn />
                    </Button>
                    <Modal
                        isOpen={isOpen}
                        onOpenChange={onOpenChange}
                        placement="center"
                        classNames={{ body: 'min-h-[100px]' }}>
                        <ModalContent>
                            <>
                                <ModalHeader className="flex flex-col gap-1">Log In</ModalHeader>
                                <ModalBody>
                                    <Button
                                        color="primary"
                                        onClick={signInWithGoogle}
                                        className="text-sm">
                                        Sign in with <BsGoogle size={22} />
                                    </Button>
                                </ModalBody>
                            </>
                        </ModalContent>
                    </Modal>
                </>
            )}
        </>
    )
}
