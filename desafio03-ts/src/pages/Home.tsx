import { Box, Center, Input } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { AppContext } from "../components/AppContext";
import { Card } from "../components/Card";
import DButton from "../components/DButton";
import { login } from "../services/login";
import { changeLocalStorage } from "../services/storage";

const Home = () => {
    const [ email, setEmail ] = useState<string>('')
    const [ password, setPassword ] = useState<string>('')
    const { isLoggedIn, setIsLoggedIn } = useContext(AppContext)
    const navigate = useNavigate()

    const validateUser = async (email: string, password: string) => {
        const loggedInUser = await login(email, password)

        if(!loggedInUser){
            return alert('Email ou senha inválidos')
        }

        setIsLoggedIn(true)
        changeLocalStorage({
            login: true,
            email: loggedInUser.email,
            name: loggedInUser.name
        })
        navigate('/conta/1')
    }

    if (isLoggedIn) {
        return <Navigate to='/conta/1' replace />
    }
  
    return (
        <Box padding="25px">
            <Card>
                <Center>
                    <h1>Faça o login</h1>
                </Center>
                <Input placeholder="email" value={email} onChange={(event) => setEmail(event.target.value)} />
                <Input type="password" placeholder="password" value={password} onChange={(event) => setPassword(event.target.value)} />
                <Center>
                    <DButton
                        onClick={() => validateUser(email, password)}
                    />
                </Center>
            </Card>
        </Box>
    );
}

export default Home;
