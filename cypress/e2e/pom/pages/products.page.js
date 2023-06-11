class ProductsPage{

    get lnkFleeceJacket() {return cy.contains('Sauce Labs Fleece Jacket')}

    selectFleeceJacket(){
        this.lnkFleeceJacket.click()
    }

}

export default new ProductsPage()