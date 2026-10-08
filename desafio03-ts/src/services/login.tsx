import { api, UserData } from "../api"

export const login = async (email: string, password: string): Promise<UserData | null> => {
    const data = await api

    return email === data.email && password === data.password ? data : null
}
