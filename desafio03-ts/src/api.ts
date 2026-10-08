export interface UserData {
  email: string;
  password: string;
  name: string;
  balance: number;
  id: string;
}

const conta: UserData = {
  email: 'pablo@dio.bank',
  password: '123456',
  name: 'Pablo Martins',
  balance: 2000.0,
  id: '1'
};

export const api: Promise<UserData> = new Promise((resolve) => {
  setTimeout(() => {
    resolve(conta);
  }, 3000);
});
