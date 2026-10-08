import { CompanyAccount } from './class/CompanyAccount';
import { PeopleAccount } from './class/PeopleAccount';
import { SavingsAccount } from './class/SavingsAccount';

console.log('===== Conta Pessoa =====');
const peopleAccount = new PeopleAccount(1, 'Nath', 10);
console.log(`Titular: ${peopleAccount.getName()}`);
peopleAccount.deposit(500);
peopleAccount.withdraw(200);

console.log('\n===== Conta Empresa =====');
const companyAccount = new CompanyAccount('DIO', 20);
console.log(`Titular: ${companyAccount.getName()}`);
companyAccount.getLoan(3000);
companyAccount.deposit(1000);

console.log('\n===== Conta Poupança (bônus) =====');
const savingsAccount = new SavingsAccount('Pablo', 30);
console.log(`Titular: ${savingsAccount.getName()}`);
savingsAccount.deposit(100); // credita 110
