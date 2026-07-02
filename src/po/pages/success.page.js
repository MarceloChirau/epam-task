
const BaseComponent=require('../components/base.component');

class SuccessPage extends BaseComponent{
    constructor(){
        super('#checkout_complete_container')
    }

    get thankYouMsg(){
        return this.rootEl.$('h2.complete-header')
    }
}

module.exports=SuccessPage;