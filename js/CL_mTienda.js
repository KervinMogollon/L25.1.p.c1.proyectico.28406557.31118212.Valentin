import mFlores from "./Hijas/CL_mFlores.js";

export default class mTienda {
    constructor() {
        this.acumVentas = 0.00;
        this.cntFloresNaturales = 0;
        this.cntFloresNaturalesTipo2 = 0;
    }

    procesarRamo(r) {
        this.acumVentas += r.montTotal()

        if (r instanceof mFlores) {
            if (r.tipo === "N") {
                this.cntFloresNaturales++
                if (r.envase === 2) {
                    this.cntFloresNaturalesTipo2++
                }
            }
        }
    }

    montoFinal(){
        return this.acumVentas
    }

    promdFloresNaturalesEnMediano(){
        return (this.cntFloresNaturalesTipo2 / cntFloresNaturales) * 100
    }
}