import { DioAccount } from './DioAccount';

export class SavingsAccount extends DioAccount {
  // sobrescreve deposit para creditar valor + 10
  deposit = (valor: number): number => {
    if (this.validateStatus()) {
      const credito = valor + 10;
      this.updateBalance(credito);
      console.log(`Depósito com bônus: R$${valor} -> crédito R$10,00`);
      this.getBalance();
      return credito;
    }
    return 0;
  };
}
