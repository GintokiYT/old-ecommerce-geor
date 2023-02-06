import IPayMethod from './IPayMethod';
import ICoupon from './ICoupon';


export default interface IOrder {

    typeOrder: string,
    payMethod: IPayMethod,
    coupon: ICoupon
    detailsOrderToHome: {
        direction: string,
        dClass: string,
        time:string,
        who:string,
        requirements: string
    },
    detailsOrderToStore:{
        direction: string,
        dClass: string,
        who: string
    }
}
  