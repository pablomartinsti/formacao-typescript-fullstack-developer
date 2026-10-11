import { UserController } from './UserController';
import { UserService } from '../services/UserService';
import { describe, expect, it, jest } from '@jest/globals';
import { Request } from 'express';
import { makeMockResponse } from '../__mocks__/mockResponse.mock';
import { makeMockRequest } from '../__mocks__/mockRequest.mock';

describe('UserController', () => {
  const mockUserService: Partial<UserService> = {
    createUser: jest.fn(),
    getAllUsers: jest.fn(() => []),
    deleteUser: jest.fn((_email: string) => true)
  };

  const userController = new UserController(mockUserService as UserService);

  it('Deve adicionar um novo usuário', () => {
    const mockRequest = {
      body: {
        name: 'Nath',
        email: 'nath@test.com'
      }
    } as Request;
    const mockResponse = makeMockResponse();
    userController.createUser(mockRequest, mockResponse);
    expect(mockResponse.state.status).toBe(201);
    expect(mockResponse.state.json).toMatchObject({ message: 'Usuário criado' });
  });

  it('Deve retornar erro quando o nome não for informado', () => {
    const mockRequest = {
      body: {
        email: 'nath@test.com'
      }
    } as Request;
    const mockResponse = makeMockResponse();
    userController.createUser(mockRequest, mockResponse);
    expect(mockResponse.state.status).toBe(400);
    expect(mockResponse.state.json).toMatchObject({ message: 'Bad request! Name obrigatório' });
    expect(mockUserService.createUser).not.toHaveBeenCalled();
  });

  it('Deve retornar erro quando o e-mail não for informado', () => {
    const mockRequest = {
      body: {
        name: 'Nath'
      }
    } as Request;
    const mockResponse = makeMockResponse();
    userController.createUser(mockRequest, mockResponse);
    expect(mockResponse.state.status).toBe(400);
    expect(mockResponse.state.json).toMatchObject({ message: 'Bad request! Email obrigatório' });
    expect(mockUserService.createUser).not.toHaveBeenCalled();
  });

  it('Deve chamar o serviço para buscar todos os usuários', () => {
    const users = [{ name: 'Nath', email: 'nath@test.com' }];
    jest.mocked(mockUserService.getAllUsers!).mockReturnValue(users);
    const mockRequest = {} as Request;
    const mockResponse = makeMockResponse();
    userController.getAllUsers(mockRequest, mockResponse);
    expect(mockUserService.getAllUsers).toHaveBeenCalled();
    expect(mockResponse.state.status).toBe(200);
    expect(mockResponse.state.json).toEqual(users);
  });

  it('Deve deletar um usuário pelo e-mail', () => {
    jest.mocked(mockUserService.deleteUser!).mockReturnValue(true);
    const mockRequest = makeMockRequest({ params: { email: 'nath@test.com' } });
    const mockResponse = makeMockResponse();
    userController.deleteUser(mockRequest, mockResponse);
    expect(mockUserService.deleteUser).toHaveBeenCalledWith('nath@test.com');
    expect(mockResponse.state.status).toBe(200);
    expect(mockResponse.state.json).toMatchObject({ message: 'Usuário deletado' });
  });

  it('Deve retornar erro quando o usuário não for encontrado para exclusão', () => {
    jest.mocked(mockUserService.deleteUser!).mockReturnValue(false);
    const mockRequest = makeMockRequest({ params: { email: 'unknown@test.com' } });
    const mockResponse = makeMockResponse();
    userController.deleteUser(mockRequest, mockResponse);
    expect(mockResponse.state.status).toBe(404);
    expect(mockResponse.state.json).toMatchObject({ message: 'Usuário não encontrado' });
  });
});
