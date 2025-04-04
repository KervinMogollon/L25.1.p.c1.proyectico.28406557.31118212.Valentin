import Ramos from "../CL_Ramo.js";

export default class mFrutas extends Ramos {
    constructor({cod, envase, costBase, extra}) {
        super(cod, envase, costBase);
        this.extra = extra;
    }

    set extra(extra) {
        this._extra = extra
    }

    get extra() {
        return this._extra
    }

    montTotal() {
        if (this.extra == "SI") {
            return this.costBase - (this.costBase * 0.18)
        }
        else
            return this.costBase
    }
}




