/// <reference types="jest" />

import { User, UserService } from './UserService';

describe('UserService', () => {
  const mockDb: User[] = [];
  const userService = new UserService(mockDb);

  it('Deve adicionar um novo usuário', () => {
    const mockConsole = jest.spyOn(global.console, 'log');
    userService.createUser('nath', 'nath@test.com');
    expect(mockConsole).toHaveBeenCalledWith('DB atualizado', mockDb);
  });

  it('Deve deletar um usuário pelo e-mail', () => {
    const database: User[] = [
      { name: 'Nath', email: 'nath@test.com' },
      { name: 'Joana', email: 'joana@test.com' }
    ];
    const service = new UserService(database);

    expect(service.deleteUser('nath@test.com')).toBe(true);
    expect(database).toEqual([{ name: 'Joana', email: 'joana@test.com' }]);
  });

  it('Deve retornar falso quando o e-mail não existir', () => {
    const database: User[] = [{ name: 'Joana', email: 'joana@test.com' }];
    const service = new UserService(database);

    expect(service.deleteUser('unknown@test.com')).toBe(false);
    expect(database).toEqual([{ name: 'Joana', email: 'joana@test.com' }]);
  });
});
