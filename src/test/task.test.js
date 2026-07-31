

const{loginComponent,shoppingPage,checkoutPage,successPage,fillForm,finishCheckout}=require('../po/index');

const{users,cart,fillFormUser,loginTestData}=require('../data/index');

describe('End-to-end flow',()=>{

    


it('completes happy path from login to success message',async()=>{

    await loginComponent.openPage();
    await loginComponent.login(users.standard.username,users.standard.password);
    await loginComponent.clickSubmit(); 
    const title=await loginComponent.getTitle();
    await expect(title).toBe(cart.title);

    
    await expect(shoppingPage.shoppingCartBtn).toBeDisplayed();
    await shoppingPage.addProductBtn(cart.product).click();
    
    
    await shoppingPage.shoppingCartBtn.click();
    const chosenProduct=await shoppingPage.productToExistInCart(cart.product);
    await expect(chosenProduct).toEqual(cart.product);


    await expect(checkoutPage.checkoutBtn).toBeEnabled();
    await checkoutPage.checkoutBtn.click();


    await fillForm.fillAndContinue(fillFormUser.username,fillFormUser.lastname,fillFormUser.zip);
    await finishCheckout.finishBtn.click();
    

    await expect(successPage.thankYouMsg).toExist();
    const successMsg=await successPage.thankYouMsg;
    await expect(successMsg).toHaveText("Thank you for your order!");

})
})



describe('UC-2 Data Driven Login',()=>{
    beforeEach(async()=>{
        await loginComponent.openPage();

    })

loginTestData.forEach(({description,username,password,expectedResult,expectedMessage})=>{
it(description,async()=>{
    await loginComponent.username.setValue(username);
    await loginComponent.password.setValue(password);
    await loginComponent.submitBtn.click();

    if(expectedResult==='success'){
        await expect(browser).toHaveTitle(expectedMessage)
    }else{
        const errorMsg=await loginComponent.failMsg;
        await expect(errorMsg).toHaveText(expectedMessage);
    }
})
})


})