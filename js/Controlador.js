export default class CL_Controlador{
    constructor(modelo, vista){
        this.modelo = modelo;
        this.vista = vista;
    }

    procesarFlores(){
        this.modelo.procesarRamo(this.vista.iniciarFlores())
    
        this.vista.Reporte(
            this.modelo.montoFinal(),
            this.modelo.promdFloresNaturalesEnMediano(),
        )
    }

    procesarFrutas(){
        this.modelo.procesarRamo(this.vista.iniciarFrutas())
    
        this.vista.Reporte(
            this.modelo.montoFinal(),
            this.modelo.promdFloresNaturalesEnMediano(),
        )
    }
}