import { DioAccount } from './DioAccount';

export class CompanyAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  getLoan = (valor: number): void => {
    if (this.validateStatus()) {
      this.updateBalance(valor);
      console.log(`Voce pegou um empréstimo no valor: R$${valor}`);
      this.getBalance();
    }
  };
}
