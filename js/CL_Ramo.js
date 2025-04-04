export default class Ramos {
    constructor(cod, envase, costBase) {
        this.cod = cod;
        this.envase = envase;
        this.costBase = costBase;
    }

    set cod(cod) {
        this._cod = cod;
    }

    get cod() {
        return this._cod
    }

    set envase(envase) {
        this._envase = +envase;
    }

    get envase() {
        return this._envase
    }

    set costBase(costBase) {
        this._costBase = +costBase;
    }

    get costBase() {
        return this._costBase
    }
}