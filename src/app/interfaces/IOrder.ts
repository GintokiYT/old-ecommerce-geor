import IPayMethod from './IPayMethod';
import ICoupon from './ICoupon';
import IBill from './IBill';


export default interface IOrder {

    typeOrder: string,
    payMethod: IPayMethod,
    coupon: ICoupon,
    bill: IBill,
    detailsOrderToHome: {
        direction: string,
        dClass: string,
        time:string,
        who:string,
        requirements: string
    },
    detailsOrderToStore:{
        store: string,
        direction: string,
        dClass: string,
        who: string
    }
}
  