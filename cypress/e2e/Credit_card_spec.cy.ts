// @ts-ignore
import LoginPage from '../pages/LoginPage';
// @ts-ignore
import AtmPage from '../pages/AtmPage';
// @ts-ignore
import CreditCardPage from '../pages/CreditCardPage';
import { combineLatest } from 'rxjs';

describe('Verify credit card flow', () => {
  const loginPage = new LoginPage()
  const creditCardPage = new CreditCardPage()

  it('credit card flow', () => {
    //navigate to url
    loginPage.navigateToUrl()
    //mouse hover on menu 

    creditCardPage.mouseHoverOnBanking().invoke('show').click({ force: true })
    cy.wait(2000)

    // cy.wait(1000)
    //click on credit card 
    creditCardPage.clickOnCreditCard().should('be.visible')
    creditCardPage.clickOnCreditCard().click({ force: true })
    cy.wait(1000)
    //validate credit card heading
    creditCardPage.validateCreditCardHeading().contains('Credit cards')
    // //validate apply now button
    creditCardPage.clickOnApplyNow().should('be.visible')
    // //validate total cards
    creditCardPage.validateTotalCard().should('have.length', 3)
    //validate first card image 
    creditCardPage.validateFIrstCardImage().invoke("prop", "src").should('contain', 'cashback-card')
    //validate first card heading 
    creditCardPage.validateFirstCardHeader().contains('HSBC Cashback Credit Card')
    //validate compare card is present for the first card 
    creditCardPage.validateFirstCardCompare().should('be.visible')
    //validate find out more 
    creditCardPage.validateFindOutMore().should('be.visible')
    //validate apply now button 
    creditCardPage.validateApplyNow().should('be.visible')
    //validate click on first compare card 
    creditCardPage.validateFirstCardCompare().click()
    cy.wait(3000)
    //validate cross icon
    creditCardPage.validateCrossIconAtPopup().should('be.visible')
    //validate select credit card heading 
    creditCardPage.validateSelectCardPopup().contains('Select cards to compare')
    //validate total compare card 
    creditCardPage.validateTotalCompareCard().should('have.length', 3)
    //click on first card checkbox 
    creditCardPage.clickOnFirstCard().click()
    cy.wait(1000)
    //click on second card checkbox 
    creditCardPage.clickOnSecondCard().click()
    //click on compare cta
    creditCardPage.clickOnCompareCard().click()
    cy.wait(1000)
    //validate total two cards are present 
    creditCardPage.validateTotalSelectedCard().should('have.length', 2)
    //verify two remove links are present 
    creditCardPage.validateTotalRemoveLink().should('have.length', 2)
    //click on add card 
    creditCardPage.clickOnAddCard().click()
    cy.wait(1000)
    //click on second card checkbox 
    creditCardPage.clickOnThirdCard().click()
    //click on compare cta
    creditCardPage.clickOnCompareCard().click()
    cy.wait(1000)
    //validate total three cards are present 
    creditCardPage.validateTotalSelectedCard().should('have.length', 3)
    //verify three remove links are present 
    creditCardPage.validateTotalRemoveLink().should('have.length', 3)
    //click on remove link 
    creditCardPage.clickOnAnyRemoveLink().click()
    cy.wait(1000)
    //click on add card 
    creditCardPage.clickOnAddCard().click()
    cy.wait(1000)
    //click on cross icon
    creditCardPage.validateCrossIconAtPopup().click()
  })
})