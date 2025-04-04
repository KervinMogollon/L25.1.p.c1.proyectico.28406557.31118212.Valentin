import mFlores from "./Hijas/CL_mFlores.js";
import vFlores from "./Hijas/CL_vFlores.js";

import mFrutas from "./Hijas/CL_mFrutas.js";
import vFruta from "./Hijas/CL_vFrutas.js";

export default class vTienda {
    constructor() {
        this.controlador = null;

        this.vFlor = new vFlores();
        this.vFrut = new vFruta();

        this.salida = document.getElementById("salida");

        this.vFlor.btProcesar.onclick = () => {
            this.controlador.procesarFlores()
        }

        this.vFrut.btProcesar.onclick = () => {
            this.controlador.procesarFrutas()
        }
    }

    iniciarFlores() {
        this.mFlor = new mFlores({
            cod: this.vFlor.cod,
            envase: this.vFlor.envase,
            costBase: this.vFlor.costBase,
            tipo: this.vFlor.tipo,
        })
        return this.mFlor;
    }

    iniciarFrutas() {
        this.mFrut = new mFrutas({
            cod: this.vFrut.cod,
            envase: this.vFrut.envase,
            costBase: this.vFrut.costBase,
            extra: this.vFrut.extra,
        })
        return this.mFrut;
    }

    reporte(pagoTotal, porcentaje) {
        this.salida.innerHTML = `
        <br>Total pagado: ${pagoTotal}
        <br>Porcentaje de flores naturales con envase mediano: ${porcentaje}
        `
    }

}