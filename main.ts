import { Carro } from "./carro";
import { Moto } from "./moto";

let fusca = new Carro(1,"mostarda", "audi", "Murilo Man", "v8", 5, 5);
fusca.acelerar();
fusca.desacelerar();
fusca.alterarCorVeiculo();


const motinha = new Moto("Murilo", "Red");
motinha.acelerar();
motinha.desacelerar();
console.log(motinha.obterMotorista());
console.log(motinha.obterMarca());