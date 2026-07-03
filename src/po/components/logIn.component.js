const BaseComponent=require('./base.component')

class LoginComponent extends BaseComponent{

constructor(){
    super('div.login_wrapper-inner');
}
get username(){
    return this.rootEl.$('#user-name.input_error.form_input');
}
get password(){
    return this.rootEl.$('#password.input_error.form_input');
}
get submitBtn(){
    return this.rootEl.$('input#login-button');
}
get failMsg(){
    return  this.rootEl.$('h3[data-test="error"]');
}


}

module.exports=LoginComponent;
