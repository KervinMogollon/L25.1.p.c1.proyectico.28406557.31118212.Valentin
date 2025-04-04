export default class CL_Controlador{
    constructor(modelo, vista){
        this.modelo = modelo;
        this.vista = vista;
    }

    procesarFlores(){
        this.modelo.procesarRamo(this.vista.iniciarFlores())
    
        this.vista.reporte1(
            this.modelo.montoFinal(),
            this.modelo.promdFloresNaturalesEnMediano(),
        )
    }

    procesarFrutas(){
        this.modelo.procesarRamo(this.vista.iniciarFrutas())
    
        this.vista.reporte2(
            this.modelo.montoFinal(),
            this.modelo.promdFloresNaturalesEnMediano(),
        )
    }
}