export default interface pedidoInterface {
    detallesEntregaADomicilio: {
        direction: string,
        time:string,
        who:string,
        requisitos: string
    },
    detallesEntregaATienda:{
        direction: string,
        who: string
    }
}
  