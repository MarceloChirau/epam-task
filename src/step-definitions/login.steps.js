const {Given,When,Then} =require ('@wdio/cucumber-framework');

const LoginComponent =require( '../po/components/logIn.component');

const loginComponent=new LoginComponent();
console.log("LOGIN STEPS LOADED");

Given("the user is on the login page",async()=>{
await loginComponent.open();
});

When("the user enters valid credentials",async()=>{
    await loginComponent.login('standard_user','secret_sauce')
});

When("the user clicks the Login button",async()=>{
    await loginComponent.clickSubmit();
})

Then('the Swag Labs should be displayed',async()=>{
    await expect(await loginComponent.getTitle()).toBe('Swag Labs')
})