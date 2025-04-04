import Ramos from "../CL_Ramo.js";

export default class mFlores extends Ramos {
    constructor({cod, envase, costBase, tipo}) {
        super(cod, envase, costBase);
        this.tipo = tipo
    }

    set tipo(tipo) {
        this._tipo = tipo
    }

    get tipo() {
        return this._tipo
    }

    montTotal() {
        if (this.tipo == "N")
            return this.costBase + (this.costBase * 0.08)
        else
            return this.costBase - (this.costBase * 0.10)
    }
}