class AtmPage{

    clickOnNearestATMLink(){
        return cy.xpath('//div[@class="row wrapper"]//li//a[contains(normalize-space(),"Find your nearest HSBC branch")]')
    }

    validateATMHeading(){
        return cy.xpath('//div[@id="content_intro_hero_banner_2"]//h1[normalize-space()="Branches & ATMs"]')
    }

    clickOnBranchATMButton(){
        return cy.get('#content_main_button_1')
    }

    enterTownName(){
        return cy.get('#searchInput')
    }

    selectOneCountryNameFromDropDown(){
        return cy.xpath('//ul[@id="autocomplete-results"]//li[1][text()="India"]')
    }

    validateAtmHeaderName(){
        return cy.xpath('//ul//li//h2[text()="Rajbhavan Road"]')
    }

    clickOnShowMoreResultBtn(){
        return cy.xpath('//button[text()="Show more results"]')
    }

    validateSecondTwonName(){
        return cy.xpath('//ul//li[2]//button//h2')
    }
    
    validateInstagramIcon(){
        return cy.xpath('//a[@class="social-image social-icon-instagram"]//span')
    }

    validateFacebookIcon(){
        return cy.xpath('//a[@class="social-image social-icon-facebook"]//span')
    }

    validateTwitterIcon(){
        return cy.xpath('//a[@class="social-image social-icon-twitter"]//span')
    }

    clickOnHSBCLogo(){
        return cy.xpath('//div[@class="header-logo lg-2"]//a')
    }

    clickOnPrivacyLink(){
        return cy.xpath('//div[@class="row wrapper"]//ul//li//a[text()="Privacy Statement"]')
    }

    validatePrivacyStatementHeading(){
        return cy.xpath('//div//h1[normalize-space()="Privacy Statement"]')
    }

}

export default AtmPage