function replaceParam(param){
    const replaced=param.replace(/\s/g,'-').toLowerCase();
    // console.log('replaced:',replaced)
    return `button#add-to-cart-${replaced}`;
}

console.log(replaceParam('Test.allTheThings() T-Shirt (Red)'));