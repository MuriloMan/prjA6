"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var veiculo_1 = require("./veiculo");
var Carro = /** @class */ (function (_super) {
    __extends(Carro, _super);
    function Carro(pneu, cor, marca, motorista, motor, portas, passageiros) {
        var _this = _super.call(this, pneu, cor, marca, motorista) || this;
        _this.portas = portas;
        _this.passageiros = passageiros;
        return _this;
    }
    Carro.prototype.acelerar = function () {
        console.log("Acelerouu");
    };
    Carro.prototype.desacelerar = function () {
        console.log("Desacelerouu");
    };
    Carro.prototype.alterarCorVeiculo = function () {
        this.cor = "verde";
        console.log("Cor do veiculo" + this.cor);
    };
    return Carro;
}(veiculo_1.Veiculo));
exports.Carro = Carro;
