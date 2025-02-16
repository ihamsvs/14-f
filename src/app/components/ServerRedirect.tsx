import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface ServerRedirectProps {
    password: string
}

export default function ServerRedirect ({password} : ServerRedirectProps){
    const router = useRouter()
    const numberPassword : string = "2711"
    useEffect(() => {
        if (password == numberPassword){
            router.push('/dashboard')
        } else {
            alert("Contraseña incorrecta. Inténtalo de nuevo.")
        }
    }, [password, router])
    return null

}