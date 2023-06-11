import headerComp from "../components/header.comp.js"

class ProductPage {

    get btnAddToCart() { return cy.get('#add-to-cart-sauce-labs-fleece-jacket')}
    get btnRemove() { return cy.contains('Remove')}

    addToCart(){
        this.btnAddToCart.click()
    }

    chooseCart(){
        headerComp.selectCart()
    }

}

export default new ProductPage()