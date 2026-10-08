import { login } from './login';

jest.mock('../api', () => ({
  api: Promise.resolve({
    email: 'pablo@dio.bank',
    password: '123456',
    name: 'Pablo Martins',
    balance: 2000,
    id: '1'
  })
}));

describe('login', () => {
  const mockEmail = 'pablo@dio.bank';
  const mockPassword = '123456';

  it('Deve autenticar quando email e senha forem válidos', async () => {
    const response = await login(mockEmail, mockPassword);
    expect(response).toMatchObject({
      email: mockEmail,
      name: 'Pablo Martins'
    });
  });

  it('Deve recusar uma senha inválida', async () => {
    const response = await login(mockEmail, 'senha-invalida');
    expect(response).toBeNull();
  });

  it('Deve recusar um email inválido', async () => {
    const response = await login('email@invalido.com', mockPassword);
    expect(response).toBeNull();
  });
});
