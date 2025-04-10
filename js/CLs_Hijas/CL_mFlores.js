import Ramos from "../CL_Ramo.js";

export default class mFlores extends Ramos {
    constructor({ cod, envase, costBase, cupon, tipo }) {
        super(cod, envase, costBase, cupon);
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
            return this.costNeto() * 0.10
        else
            return 0
    }

    incremento() {
        if (this.tipo == "N")
            return this.costNeto() * 0.08
        else
            return 0
    }

    montTotal() {
        if (this.tipo == "A")
            return this.costNeto() - this.descuento()
        else if (this.tipo == "N")
            return this.costNeto() + this.incremento()
        else
            return 0
    }
}