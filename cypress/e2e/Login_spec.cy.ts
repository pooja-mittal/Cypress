// type definitions for Cypress object "cy"
// <reference types="cypress" />
// @ts-ignore
 import LoginPage from '../pages/LoginPage';

describe('Verify HSBC app', () => {
  const loginPage=new LoginPage()
    // beforeEach('run before each scenerio', ()=>{
    //     loginPage.visit()
    // })
  it('Login into the application', () => {
    
    loginPage.navigateToUrl()
   loginPage.validateLogoIcon().find("img").should('be.visible')
    //validate title 
    loginPage.getTitle().should('eq','HSBC India - Credit Cards, NRI Services, Saving and Deposit')
    //valdiate login 
    loginPage.clickOnLogin().click({force: true})
    //validate log on headin 
    loginPage.validateLogOnHeading().should('contain','Log On')   
    //validate continue button is disable
    loginPage.validatContinueBtnDisableAtStarting().should('be.disabled')   
    //enter email
    loginPage.enterEmail().type('pooja.a@xyz.com')
    //validate continue button is enabled
    loginPage.validateContinueBtnIsEnable().should('be.enabled')
    //validate checkbox is uncheck bydefualt
    loginPage.validateDefualtConditionOfCheckBox().uncheck()
    //validate tooltip is present and click on it
    loginPage.validateTooltipAndClick().should('be.visible').click()
    //validate heading on popup
    loginPage.validateUsernameHeadingOnPopup().should('have.text','Username')
    //validate cross icon and click on it
    loginPage.validateCrossIconAndClick().should('be.visible').click()
  })

  it('second scenerio',()=>{

  })
})