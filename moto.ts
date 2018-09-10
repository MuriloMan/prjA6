import { Veiculo } from "./veiculo";
import { Motor } from "./motor";

export class Moto extends Veiculo implements Motor{

    //public motorista : string;

    constructor (
        public motorista: string, 
        public cor: any){
            super(2,cor, "honda", motorista);

    }
    
    acelerar() {
        console.log("Acelerouu");
    }
    
    desacelerar() {
        console.log("Desacelerouu");
    }

    obterMotorista() : string{
        return this.motorista;
    }

    obterMarca() : string {
        return this.marca;
    }
}