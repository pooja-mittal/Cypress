// @ts-ignore
import LoginPage from '../pages/LoginPage';
// @ts-ignore
import AtmPage from '../pages/AtmPage';
import { at } from 'cypress/types/lodash';

describe('Verify ATM search flow', () => {
    const loginPage = new LoginPage()
    const atmPage = new AtmPage()

    it('ATM search flow', () => {
        loginPage.navigateToUrl()
        //scroll to the bottom of the screen
        cy.scrollTo('bottom')
        //click on nearest atm branch
        atmPage.clickOnNearestATMLink().click()
        //validate url text
        cy.url().should('contain','/ways-to-bank/branches/')
        //validate atm page heading 
        atmPage.validateATMHeading().contains('Branches & ATMs')
        //click on branch atm locator 
        atmPage.clickOnBranchATMButton().click()
        //enter townname
        atmPage.enterTownName().type("India")
        // cy.wait(1000)
        //select one country 
        atmPage.selectOneCountryNameFromDropDown().click()
        cy.wait(1000)
        //validate atm header name
        atmPage.validateAtmHeaderName().contains('Rajbhavan Road')
        //click on show more result 
        atmPage.clickOnShowMoreResultBtn().click()
        //valdiate second town name
        atmPage.validateSecondTwonName().visible
        //navigate to footer
        cy.scrollTo('bottom')
        //validate instagram icon
        atmPage.validateInstagramIcon().visible
         //validate facebook icon
         atmPage.validateFacebookIcon().visible
          //validate twitter icon
        atmPage.validateTwitterIcon().visible
        //click on hsbc logo
        atmPage.clickOnHSBCLogo().click()
        cy.wait(1000)
        //validate user navigate to home page
        cy.url().should('eq','https://www.hsbc.co.in/')
        //scroll down to the bottom
        cy.scrollTo('bottom')
        //click on privacy link 
        atmPage.clickOnPrivacyLink().click()
        //validate privacy statement heading 
        atmPage.validatePrivacyStatementHeading().contains('Privacy Statement')

    })
})

