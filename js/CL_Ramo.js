export default class Ramos {
    constructor(cod, envase, costBase, cupon) {
        this.cod = cod;
        this.envase = envase;
        this.costBase = costBase;
        this.cupon = cupon;
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

    set cupon(cupon) {
        this._cupon = +cupon;
    }

    get cupon() {
        return this._cupon
    }

    costNeto() {
        return this.costBase - (this.costBase * (this.cupon / 100))
    }
}