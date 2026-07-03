const BaseComponent=require('../components/base.component')

class ShoppingPage extends BaseComponent{
    constructor(){
        super('div#inventory_container.inventory_container')
    }

addProductBtn(product){
    const replaced=product.replace(/\s/g,'-').toLowerCase();
    // console.log('this is the selector passed: ',`button#add-to-cart-${product}.btn.btn_primary.btn_small.btn_inventory`)
    // return $(`button${product}.btn.btn_primary.btn_small.btn_inventory`)
    return $(`button#add-to-cart-${replaced}.btn.btn_primary.btn_small.btn_inventory`)

}

get shoppingCartBtn(){
   return $('a.shopping_cart_link')
}


async productToExistInCart(product){
    //find all products available in the cart
    // and then loop to see if it exists
    const products=await $$('.inventory_item_name');

    for(const item of products){
        const title=await item.getText();
        if(title===product){
            return item;
        }else{
            return `${product} doesnt exist in the cart`
        }
    }
}
}



module.exports=ShoppingPage;


