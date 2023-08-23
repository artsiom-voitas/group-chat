import { auth } from '@/utils/firebase'
import { Button, Card, CardBody, CardFooter, CardHeader } from '@nextui-org/react'
import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth'
import { Lock, MessageSquare } from 'lucide-react'
import { BsGoogle } from 'react-icons/bs'

export default function Unauthorized() {
    function signInWithGoogle(): void {
        const provider = new GoogleAuthProvider()
        signInWithRedirect(auth, provider)
    }
    return (
        <Card className="py-4 my-24 w-full lg:w-1/2 mx-auto">
            <CardHeader className="pb-0 pt-2 px-4 flex-col gap-4 items-center">
                <h4 className="font-bold text-medium">It is all about your</h4>
                <p className="text-3xl uppercase font-bold">Privacy</p>
                <Lock size={70} />
                <small className="text-default-500">
                    Be first who tried legendary 2319 Messenger.
                </small>
            </CardHeader>
            <CardBody className="overflow-visible py-12 flex items-center">
                <div className="flex gap-2 items-center">
                    <Button
                        color="primary"
                        onClick={signInWithGoogle}
                        className="text-sm">
                        Join Now with <BsGoogle size={22} />
                    </Button>
                </div>
            </CardBody>
            <CardFooter className="flex flex-col items-center">
                <p className="text-default-500 text-xl">At least they all say that is true.</p>
                <small className="text-default-500">
                    I will not lie, I do not know anything about it... yet.
                </small>
            </CardFooter>
        </Card>
    )
}
