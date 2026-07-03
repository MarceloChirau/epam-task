const BaseComponent=require('../components/base.component')


class FillForm extends BaseComponent{
    constructor(){
        super('.checkout_info_container')
    }

    get firstName(){
        return this.rootEl.$(' .checkout_info .form_group input#first-name')
        }
        get lastName(){
        return this.rootEl.$(' .checkout_info .form_group input#last-name')
        }
        get zip(){
            return this.rootEl.$(' .checkout_info .form_group input#postal-code')
        
        }
        get continueBtn(){
            return this.rootEl.$(' .checkout_buttons input#continue')
        }
       



}

module.exports=FillForm;