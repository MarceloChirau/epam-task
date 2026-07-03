const LoginComponent=require('../po/components/logIn.component');
const loginComponent=new LoginComponent();

const ShoppingPage=require('../po/pages/shopping.page');
const shoppingPage=new ShoppingPage();

const CheckoutPage=require('../po/pages/checkout.page');
const checkoutPage=new CheckoutPage();

const SuccessPage=require('../po/pages/success.page');
const successPage=new SuccessPage();

const FillForm=require('../po/pages/fillForm.page')
const fillForm=new FillForm();

const FinishCheckout=require('../po/pages/finishCheckout.page');
const finishCheckout=new FinishCheckout();

describe('End-to-end flow',()=>{
   


it('completes happy path from login to success message',async()=>{
    //launch url
    await browser.url('/');

    //log in with standard_user and secret_sauce password
    await loginComponent.username.setValue('standard_user');
    await loginComponent.password.setValue('secret_sauce');
    await loginComponent.submitBtn.click();

    //Add "Sauce Labs Backpack" to the cart
    await expect(browser).toHaveTitle('Swag Labs')


    //for testing we will pass this product
    const product='Sauce Labs Backpack';
    await shoppingPage.addProductBtn(product).click();


    
    //Navigate to Cart and validate the item is present.
    await shoppingPage.shoppingCartBtn.click();
    const chosenProduct=await shoppingPage.productToExistInCart(product);
    await expect(chosenProduct).toHaveText(product);

    //Proceed to Checkout
    await checkoutPage.checkoutBtn.click();

    //Fill in the Information form(First Name,Last Name,Zip
    await fillForm.firstName.setValue('Marcelo');
    await fillForm.lastName.setValue('Chirau');
    await fillForm.zip.setValue('44000');

    //Complete the checkout and validate the success message:"Thank you for your order!
    await fillForm.continueBtn.click();
    await finishCheckout.finishBtn.click();
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