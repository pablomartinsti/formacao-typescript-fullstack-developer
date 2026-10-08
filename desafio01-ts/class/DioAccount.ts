export abstract class DioAccount {
  private readonly name: string;
  private readonly accountNumber: number;
  private balance: number = 0;
  private status: boolean = true;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  getName = (): string => {
    return this.name;
  };

  protected updateBalance = (valor: number): void => {
    this.balance += valor;
  };

  deposit = (valor: number): number => {
    if (this.validateStatus()) {
      this.updateBalance(valor);
      console.log(`Valor depositado foi: R$${valor},00 `);
      this.getBalance();
    }
    return valor;
  };

  withdraw = (saque: number): void => {
    if (this.validateStatus() && this.balance > saque) {
      this.updateBalance(-saque);
      console.log(`Voce sacou: R$ ${saque}`);
      this.getBalance();
    } else {
      console.log(`Saldo insuficiente verifique o saldo da conta`);
    }
  };

  getBalance = (): void => {
    console.log(`Valor do saldo é: R$${this.balance},00 `);
  };

  protected validateStatus = (): boolean => {
    if (this.status) {
      return this.status;
    }

    throw new Error('Conta inválida');
  };
}
