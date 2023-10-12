

class LoginPage{
    constructor(){
        // this.url="https://www.hsbc.co.in/"
    }

    navigateToUrl(){
        cy.visit("https://www.hsbc.co.in/")
    }

    validateLogoIcon(){
        return cy.get('div[class="header-logo lg-2"]')
    }

    getTitle(){
        return cy.title()
    }

   clickOnLogin(){
    return cy.xpath('//li//a[normalize-space()="Log On"]')
   }

   validateLogOnHeading(){
    return cy.xpath('//h2//span[normalize-space()="Log On"]')
   }

   validatContinueBtnDisableAtStarting(){
    return cy.get('#username_submit_btn')
   }

   enterEmail(){
    return cy.get('#username')
   }

   validateContinueBtnIsEnable(){
    return cy.get('#username_submit_btn')
   }

   validateDefualtConditionOfCheckBox(){
    return cy.get('#rememberMe')
   }

   validateTooltipAndClick(){
    return cy.xpath('//a//span[@class="icon icon-circle-help-solid help-icon"]')
   }

   validateUsernameHeadingOnPopup(){
    return cy.xpath('//div[@id="help_content_1"]//span[text()="Username"]')
   }

   validateCrossIconAndClick(){
    return cy.xpath('//a//span[@class="icon icon-delete"]')
   }
}

export default LoginPage;