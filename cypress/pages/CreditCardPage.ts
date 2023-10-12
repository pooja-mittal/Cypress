class CreditCardPage{

    mouseHoverOnBanking(){
        return cy.xpath('//div[@class="header-main"]//span[@class="header-main-navigation-title" and text()="Banking"]')
    }

    clickOnCreditCard(){
        return cy.xpath('//div[@class="header-main"]//div//a/h2[@class="doormat-heading" and text()="Credit Cards"]')
    }

    validateCreditCardHeading(){
        return cy.xpath('//div//h1[normalize-space()="Credit cards"]')
    }

    clickOnApplyNow(){
        return cy.xpath('//a[@id="listing_intro_button_1"]//span[text()="Apply now"]')
    }

    validateTotalCard(){
        return cy.xpath('//div[@class="row product-general"]//h2')
    }

    validateFIrstCardImage(){
        return cy.get('#listing_main_image_3')
    }

    validateFirstCardHeader(){
        return cy.xpath('//div//h2[normalize-space()="HSBC Cashback Credit Card"]')
    }
    validateFirstCardCompare(){
        return cy.xpath('//div//a[@id="listing_main_button_1"]//span')
    }

    validateFindOutMore(){
        return cy.xpath('//div//a[@id="listing_main_button_2"]//span[text()="Find out more"]')
    }

    validateApplyNow(){
        return cy.xpath('//a[@id="listing_main_button_3"]//span[text()="Apply now"]')
    }

    validateCrossIconAtPopup(){
        return cy.get('.close-button')
    }

    validateSelectCardPopup(){
        return cy.get('#title-pp_tools_productComparator_4')
    }

    validateTotalCompareCard(){
        return cy.get('.tile-selector')
    }

    clickOnFirstCard(){
        return cy.xpath('//div/span[@id="label-pp_tools_productComparator_6"]/parent::div//div')
    }

    clickOnSecondCard(){
        return cy.xpath('//div/span[@id="label-pp_tools_productComparator_8"]/parent::div//div')
    }

    clickOnCompareCard(){
        return cy.xpath('//div[@class="modal-button"]//span')
    }

    validateTotalSelectedCard(){
        return cy.xpath('//div[@class="product-select"]')
    }

    validateTotalRemoveLink(){
        return cy.xpath('.//a//span[text()="Remove card"]')
    }

    clickOnAddCard(){
        return cy.xpath('//div[@class="product-select add-product"][1]//span[text()="Add card"]')
    }

    clickOnThirdCard(){
        return cy.xpath('//div/span[@id="label-pp_tools_productComparator_10"]/parent::div//div')
    }

    clickOnAnyRemoveLink(){
        return cy.xpath('//div[@class="product-select"][1]//a//span[text()="Remove card"]')
    }


}

export default CreditCardPage