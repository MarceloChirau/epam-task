const loginComponent=require('../po/components/logIn.component');
const shoppingPage=require('../po/pages/shopping.page');
const checkoutPage=require('../po/pages/checkout.page');
const successPage=require('../po/pages/success.page');
const fillForm=require('../po/pages/fillForm.page');
const finishCheckout=require('../po/pages/finishCheckout.page');


describe('End-to-end flow',()=>{

it('completes happy path from login to success message',async()=>{
    //launch url
    await loginComponent.open();

    //log in with standard_user and secret_sauce password
    await loginComponent.login('standard_user','secret_sauce');
    await loginComponent.clickSubmit(); 
    
    //tab to have title 'Swag Labs'
const title=await loginComponent.getTitle();
    await expect(title).toBe('Swag Labs');

    //for testing we will pass this product
    const product='Sauce Labs Backpack';
    await expect(shoppingPage.shoppingCartBtn).toBeDisplayed();
    await shoppingPage.addProductBtn(product).click();

    
    //Navigate to Cart and validate the item is present.
    await shoppingPage.shoppingCartBtn.click();
    const chosenProduct=await shoppingPage.productToExistInCart(product);
    await expect(chosenProduct).toEqual(product);

    //Proceed to Checkout
    await expect(checkoutPage.checkoutBtn).toBeEnabled();
    await checkoutPage.checkoutBtn.click();

    //Fill in the Information form(First Name,Last Name,Zip
    await fillForm.fillAndContinue('Marcelo','Chirau','44000');
 
    //Complete the checkout and validate the success message:"Thank you for your order!
    await finishCheckout.finishBtn.click();
    //plus element existance
    await expect(successPage.thankYouMsg).toExist();
    const successMsg=await successPage.thankYouMsg;
    await expect(successMsg).toHaveText("Thank you for your order!");


})
})



describe('UC-2 Data Driven Login',()=>{
    beforeEach(async()=>{
        //launch url
        await browser.url('/');

    })

//i create an array of objects that i will loop through it to create 
// a data-driven pattern:
const loginTestData=[
    {
        description:'It should pass when "standard_user" is logged in',
        username:'standard_user',
        password:'secret_sauce',
        expectedResult:'success',
        expectedMessage:'Swag Labs'
    },
    {
        description:'should fail if user will try to log in with "locked_out_user"',
        username:'locked_out_user',
        password:'secret_sauce',
        expectedResult:'fail',
        expectedMessage:'Epic sadface: Sorry, this user has been locked out.'
    }
]


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