const BaseComponent=require('../components/base.component')

class FinishCheckout extends BaseComponent{
    constructor(){
        super('div.cart_footer')
    }
    get finishBtn(){
        return this.rootEl.$(' button#finish');
    }
}

module.exports=FinishCheckout;