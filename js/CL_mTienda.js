import mFlores from "./Hijas/CL_mFlores.js";
import mFrutas from "./Hijas/CL_mFrutas.js";

export default class mTienda {
    constructor() {
        this.acumVentas = 0.00;
        this.acumVentasFlores = 0.00;
        this.acumVentasFrutas = 0.00;
        this.cntFloresNaturales = 0;
        this.cntFloresNaturalesTipo2 = 0;
    }

    procesarRamo(r) {
        this.acumVentas += r.montTotal();

        if (r instanceof mFlores) {
            this.acumVentasFlores += r.montTotal()

            if (r.tipo === "N") {
                this.cntFloresNaturales++
                if (r.envase === 2) {
                    this.cntFloresNaturalesTipo2++
                }
            }
        }
        
        if(r instanceof mFrutas){
            this.acumVentasFrutas += r.montTotal()
        }
        
    }

    montoFinal(){
        return this.acumVentas
    }

    montoFinalFlores(){
        return this.acumVentasFlores
    }

    montoFinalFrutas(){
        return this.acumVentasFrutas
    }

    promdFloresNaturalesEnMediano(){
        return (this.cntFloresNaturalesTipo2 / this.cntFloresNaturales) * 100
    }


}