import {Veiculo} from "./veiculo";
import {Motor} from "./motor";

export class Carro extends Veiculo implements Motor{

    portas : number;
    passageiros : number;

    constructor (pneu: number,
        cor: string,
        marca : string,
        motorista : string,
        motor: string,
        portas: number,
        passageiros: number){

        super(pneu, cor, marca, motorista);
        this.portas = portas;
        this.passageiros = passageiros;
    }

    acelerar() {
        console.log("Acelerouu");
    }    
    
    desacelerar() {
        console.log("Desacelerouu");
    }

    alterarCorVeiculo():void{
        this.cor = "verde";
        console.log("Cor do veiculo" + this.cor);

    }


}