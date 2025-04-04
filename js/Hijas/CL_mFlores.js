import Ramos from "../CL_Ramo.js";

export default class mFlores extends Ramos {
    constructor({ cod, envase, costBase, tipo }) {
        super(cod, envase, costBase);
        this.tipo = tipo
    }

    set tipo(tipo) {
        this._tipo = tipo
    }

    get tipo() {
        return this._tipo
    }

    descuento() {
        if (this.tipo == "A")
            return this.costBase * 0.10
        else
            return 0
    }

    incremento() {
        if (this.tipo == "N")
            return this.costBase * 0.08
        else
            return 0
    }

    montTotal() {
        if (this.tipo == "A")
            return this.costBase - this.descuento()
        else if (this.tipo == "N")
            return this.costBase + this.incremento()
        else
            return 0
    }
}