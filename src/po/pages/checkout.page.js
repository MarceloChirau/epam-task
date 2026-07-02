const BaseComponent=require('../components/base.component')

class CheckoutPage extends BaseComponent{
    constructor(){
        super('div.cart_footer')
    }
get checkoutBtn(){
    return this.rootEl.$('#checkout')
}
get firstName(){
return $('.form_group input#first-name')
}
get lastName(){
return $('.form_group input#last-name')
}
get zip(){
    return $('.form_group input#postal-code')

}
get continueBtn(){
    return $('.checkout_buttons input#continue')
}
get finishBtn(){
    return $('.cart_footer button#finish')
}


}
module.exports=CheckoutPage;