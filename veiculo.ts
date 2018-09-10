//exemplo1
export class Veiculo {

    constructor( 
        public pneu:number, 
        public cor:string,
        public marca: string,
        public motorista: string
     ){}
    
     public alterarCorVeiculo(){
         console.log("cor"+ this.cor);
     }
 }
/*
export class Veiculo2 {

    // private pneu: number;
     //private cor: string;
    // private marca: string;
//private motorista : string;
    //pneu: any; //string, bool, numeric etc.

    constructor( 
        public pneu:number, 
        public cor:string,
        public marca: string,
        public motorista: string
        ) {
            this.pneu = pneu;
            this.cor = cor;
            this.marca = marca;
            this.motorista = motorista;
        }
    
        
        public alterarCorVeiculo(){
            console.log("cor"+ this.cor);
        }
}
*/
//Exemplo 2
