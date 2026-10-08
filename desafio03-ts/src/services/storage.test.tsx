import { changeLocalStorage, createLocalStorage, getAllLocalStorage, IDIoBank } from "./storage"

const dioBank: IDIoBank = {
    login: false
}

describe('storage', () => {
    beforeEach(() => {
        localStorage.clear()
    })

    it('Deve retornar o objeto no localStorage com a chave diobank', () => {
        localStorage.setItem('diobank', JSON.stringify(dioBank))

        expect(getAllLocalStorage()).toBe(JSON.stringify(dioBank))
    })

    it('Deve criar o objeto no localStorage', () => {
        createLocalStorage()

        expect(localStorage.getItem('diobank')).toBe(JSON.stringify(dioBank))
    })

    it('Deve alterar o valor do objeto no localStorage', () => {
        const loggedInUser: IDIoBank = {
            login: true,
            email: 'pablo@dio.bank',
            name: 'Pablo Martins'
        }

        changeLocalStorage(loggedInUser)

        expect(localStorage.getItem('diobank')).toBe(JSON.stringify(loggedInUser))
    })
})