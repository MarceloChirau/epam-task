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
  async openPage(){
    await browser.url('/');

  }



  async login(username,password){
await this.username.setValue(username);
await this.password.setValue(password);
  }

  async clickSubmit(){
await this.submitBtn.click();
  }

async getTitle(){
     return await browser.getTitle()
}

}

module.exports= new LoginComponent();
