import { Text } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getAllLocalStorage, IDIoBank } from "../services/storage"

const ContaInfo = () => { 
    const [ user, setUser ] = useState<IDIoBank | null>(null)

    useEffect(() => {
        const storage = getAllLocalStorage()

        if(storage) {
            setUser(JSON.parse(storage) as IDIoBank)
        }
    }, [])

    return (
        <>
            <Text fontSize='3xl' fontWeight='bold'>
                Informações da conta
            </Text>
            { user && (
                <>
                    <Text fontSize='xl'>Nome: {user.name}</Text>
                    <Text fontSize='xl'>Email: {user.email}</Text>
                </>
            ) }
            <Link to='/conta/1'>
                <Text fontSize='xl'>
                    Conta
                </Text>
            </Link>
            <a href='/conta/1'>
                Link com tag a
            </a>
        </>
    )
}

export default ContaInfo
