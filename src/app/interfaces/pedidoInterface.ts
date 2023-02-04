import MetodoPago from './MetodoPago';


export default interface pedidoInterface {

    tipoPedido: string,
    metodoPago: MetodoPago
    detallesEntregaADomicilio: {
        direction: string,
        dClass: string,
        time:string,
        who:string,
        requisitos: string
    },
    detallesEntregaATienda:{
        direction: string,
        dClass: string,
        who: string
    }
}
  