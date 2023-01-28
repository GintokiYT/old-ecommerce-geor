export default interface pedidoInterface {

    tipoPedido: string,
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
  