"use strict";
exports.__esModule = true;
//exemplo1
var Veiculo2 = /** @class */ (function () {
    // private pneu: number;
    //private cor: string;
    // private marca: string;
    //private motorista : string;
    //pneu: any; //string, bool, numeric etc.
    function Veiculo2(pneu, cor, marca, motorista) {
        this.pneu = pneu;
        this.cor = cor;
        this.marca = marca;
        this.motorista = motorista;
        this.pneu = pneu;
        this.cor = cor;
        this.marca = marca;
        this.motorista = motorista;
    }
    Veiculo2.prototype.alterarCorVeiculo = function () {
        console.log("cor" + this.cor);
    };
    return Veiculo2;
}());
exports.Veiculo2 = Veiculo2;
//Exemplo 2
var Veiculo = /** @class */ (function () {
    function Veiculo(pneu, cor, marca, motorista) {
        this.pneu = pneu;
        this.cor = cor;
        this.marca = marca;
        this.motorista = motorista;
    }
    Veiculo.prototype.alterarCorVeiculo = function () {
        console.log("cor" + this.cor);
    };
    return Veiculo;
}());
exports.Veiculo = Veiculo;
