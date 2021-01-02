import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";


const cliente1 = new Cliente("Ricardo", 12345678910);
const cliente2 = new Cliente("Alice", 12345678911);

console.log(cliente1, cliente2);

const conta1 = new ContaCorrente(1001, cliente1);
const conta2 = new ContaPoupanca(100, 1001, cliente1);
conta1.depositar(500);

const conta3 = new ContaCorrente(102, cliente2);
conta1.transferir(100, conta2);

conta1.sacar(100);
console.log(conta1);



