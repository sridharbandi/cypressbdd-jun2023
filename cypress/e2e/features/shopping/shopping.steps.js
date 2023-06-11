import { When, Then } from '@badeball/cypress-cucumber-preprocessor'
import productsPage from '../../pom/pages/products.page'
import productPage from '../../pom/pages/product.page'
import cartPage from '../../pom/pages/cart.page'
import personalInformationPage from '../../pom/pages/personalinfo.page'
import reviewPage from '../../pom/pages/review.page'
import confirmationPage from '../../pom/pages/confirmation.page'

When('user add  fleece jacket to the cart', () => {
    productsPage.selectFleeceJacket()
    productPage.addToCart()
    productPage.btnRemove.should('be.visible')
})

When('user checkout the product', () => {
    productPage.chooseCart()
    cartPage.checkOut()
})

When('user submits personal information', () => {
    personalInformationPage.submitPersonalInfo()
})

When('user confirmed the product', () => {
    reviewPage.confirmOrder()
})

Then('user sees order confirmation', () => {
    confirmationPage.lblConfirm.should('contain', 'Thank you for your order!')
})