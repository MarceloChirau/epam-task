const {Given,When,Then} =require ('@wdio/cucumber-framework');

const loginComponent =require( '../po/components/logIn.component');
const{users,cart,fillFormUser,loginTestData}=require('../data/index');




Given("the user is on the login page",async()=>{
await loginComponent.openPage();
});

When("th user enters valid credentials",async()=>{
    await loginComponent.login(users.standard.username,users.standard.password)
});

When("the user clicks the Login button",async()=>{
    await loginComponent.clickSubmit();
})

Then('the Swag Labs should be displayed',async()=>{
    await expect(await loginComponent.getTitle()).toBe(cart.title)
})

