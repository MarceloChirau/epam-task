const BaseComponent=require('../components/base.component')

class CheckoutPage extends BaseComponent{
    constructor(){
        super('div.cart_footer')
    }
get checkoutBtn(){
    return this.rootEl.$('#checkout')
}

}
module.exports=CheckoutPage;