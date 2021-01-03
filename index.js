import {Cliente} from "./Cliente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const cliente = new Cliente("Joao", 123456789000, "123")
// // console.log(cliente1, cliente2);

// const conta1 = new ContaCorrente(1001, cliente1);
// const conta2 = new ContaPoupanca(100, 1001, cliente1);
// const conta3 = new ContaCorrente(102, cliente2);
// const conta4 = new ContaSalario(cliente2);

// conta4.depositar(500);
// conta1.transferir(100, conta2);

// conta1.sacar(100);
// conta4.sacar(50)

// console.log(conta4);

const diretor = new Diretor("Rodrigo", 10000, 12345678910);
diretor.cadastrarSenha("123456");


const gerente = new Gerente("Ricardo", 5000, 12345678911);
gerente.cadastrarSenha("123");


const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123");
const clienteEstaLogado = SistemaAutenticacao.login(cliente, "123");
console.log(diretorEstaLogado, gerenteEstaLogado, clienteEstaLogado);

