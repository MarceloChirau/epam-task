const LoginComponent=require('../po/components/logIn.component');
const loginComponent=new LoginComponent();

const ShoppingPage=require('../po/pages/shopping.page');
const shoppingPage=new ShoppingPage();

const CheckoutPage=require('../po/pages/checkout.page');
const checkoutPage=new CheckoutPage();
const SuccessPage=require('../po/pages/success.page');
const successPage=new SuccessPage();


describe('Login with standard_user',()=>{
   
beforeEach(async()=>{
    await browser.url('https://www.saucedemo.com/')
})
afterEach(async()=>{
    await browser.reloadSession();
})

it('Login with standard_user',async()=>{
    await loginComponent.username.setValue('standard_user');
    await loginComponent.password.setValue('secret_sauce');
    await loginComponent.submitBtn.click();
    await expect(browser).toHaveTitle('Swag Labs')
})

it('Add "Sauce Labs Backpack" to the cart',async()=>{
    await loginComponent.username.setValue('standard_user');
    await loginComponent.password.setValue('secret_sauce');
    await loginComponent.submitBtn.click();
    await expect(browser).toHaveTitle('Swag Labs')

    await shoppingPage.addProductBtn("Sauce Labs Backpack").click();

   
})


it('Navigate to Cart and validate the item is present.',async()=>{

    await loginComponent.username.setValue('standard_user');
    await loginComponent.password.setValue('secret_sauce');
    await loginComponent.submitBtn.click();
    await expect(browser).toHaveTitle('Swag Labs')

    
    await shoppingPage.addProductBtn("Sauce Labs Backpack").click();
    // await browser.pause('320000')
    await shoppingPage.shoppingCartBtn.click();
    const product=await shoppingPage.productToExistInCart;
    await expect(product).toHaveText("Sauce Labs Backpack")

})
it('Proceed to Checkout',async()=>{
    await loginComponent.username.setValue('standard_user');
    await loginComponent.password.setValue('secret_sauce');
    await loginComponent.submitBtn.click();
    await expect(browser).toHaveTitle('Swag Labs')

    await shoppingPage.addProductBtn("Sauce Labs Backpack").click();
    await shoppingPage.shoppingCartBtn.click();
    const product=await shoppingPage.productToExistInCart;
    await expect(product).toHaveText("Sauce Labs Backpack");

    await checkoutPage.checkoutBtn.click();
})

it('Fill in the Information form(First Name,Last Name,Zip)',async()=>{
    await loginComponent.username.setValue('standard_user');
    await loginComponent.password.setValue('secret_sauce');
    await loginComponent.submitBtn.click();
    await expect(browser).toHaveTitle('Swag Labs')

    await shoppingPage.addProductBtn("Sauce Labs Backpack").click();
    await shoppingPage.shoppingCartBtn.click();
    const product=await shoppingPage.productToExistInCart;
    await expect(product).toHaveText("Sauce Labs Backpack");

    await checkoutPage.checkoutBtn.click();
    await checkoutPage.firstName.setValue('Marcelo');
    await checkoutPage.lastName.setValue('Chirau');
    await checkoutPage.zip.setValue('44000');
})

it('Complete the checkout and validate the success message:"Thank you for your order!"',async()=>{
    await loginComponent.username.setValue('standard_user');
    await loginComponent.password.setValue('secret_sauce');
    await loginComponent.submitBtn.click();
    await expect(browser).toHaveTitle('Swag Labs')

    await shoppingPage.addProductBtn("Sauce Labs Backpack").click();
    await shoppingPage.shoppingCartBtn.click();
    const product=await shoppingPage.productToExistInCart;
    await expect(product).toHaveText("Sauce Labs Backpack");

    await checkoutPage.checkoutBtn.click();
    await checkoutPage.firstName.setValue('Marcelo');
    await checkoutPage.lastName.setValue('Chirau');
    await checkoutPage.zip.setValue('44000');
    await checkoutPage.continueBtn.click();
    await checkoutPage.finishBtn.click();

    const successMsg=await successPage.thankYouMsg;

    await expect(successMsg).toHaveText("Thank you for your order!");

})



})