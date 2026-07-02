const BaseComponent=require('../components/base.component')

class ShoppingPage extends BaseComponent{
    constructor(){
        super('div#inventory_container.inventory_container')
    }

addProductBtn(product){
    const replaced=product.replace(/\s/g,'-').toLowerCase();
    console.log('this is the selector passed: ',`button#add-to-cart-${product}.btn.btn_primary.btn_small.btn_inventory`)

    return $(`button#add-to-cart-${replaced}.btn.btn_primary.btn_small.btn_inventory`)
}

get shoppingCartBtn(){
   return $('a.shopping_cart_link')
}
get productToExistInCart(){
    return $('a#item_4_title_link [data-test="inventory-item-name"]')
}

}

module.exports=ShoppingPage;