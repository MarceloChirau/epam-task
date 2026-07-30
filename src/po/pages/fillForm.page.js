const BaseComponent=require('../components/base.component')


class FillForm extends BaseComponent{
    constructor(){
        super('.checkout_info_container')
    }

    get firstName(){
        return this.rootEl.$('.checkout_info .form_group input#first-name')
        }
        get lastName(){
        return this.rootEl.$('.checkout_info .form_group input#last-name')
        }
        get zip(){
            return this.rootEl.$('.checkout_info .form_group input#postal-code')
        
        }
        get continueBtn(){
            return this.rootEl.$('.checkout_buttons input#continue')
        }
       

async fillAndContinue(name,lastname,zip){
    await this.firstName.setValue(name);
    await this.lastName.setValue(lastname);
    await this.zip.setValue(zip);
    await this.continueBtn.click();
}

}

module.exports= new FillForm();