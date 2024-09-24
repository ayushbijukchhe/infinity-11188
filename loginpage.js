class LoginPage {
    loginValid(){
        cy.visit('http://192.168.50.44:8041/')

            cy.get('#txt_username').should('have.attr','placeholder','User Name').type('admin')
            cy.get('[type="password"]').should('have.id','txt_Password').type('1')
            cy.get('#txt_Branch').should('have.attr','placeholder','Code').type('001')
            
            cy.get('[type="submit"]').should('have.id','btn_Login').type('{enter}')
            cy.get('[type="submit"]').should('have.id','btn_Login').click()
           // cy.get('#btn_ExpireMsgOk').click()
            cy.get('#product-logo').should('be.visible')
            cy.get('#txtScreenCode').should('have.attr','placeholder','Screen Code').type('11188').type('{enter}')
            
            cy.get('#ContentPlaceHolder1_lblFormname').should('have.text','Bank A/C Group Exclusion Maintenance- 11188')
    }

    typeInvalidUsername(){

        cy.get('#txt_username').should('have.attr','placeholder','User Name').type('admin1')
    }

    typeValidUsername(){
        cy.get('#txt_username').should('have.attr','placeholder','User Name').type('admin')

    }

    typeInvalidPassword(){
        cy.get('[type="password"]').should('have.id','txt_Password').type('0')

    }

    typeValidPassword(){
        cy.get('[type="password"]').should('have.id','txt_Password').type('1')

    }

    enterBranchCode(){
        cy.get('#txt_Branch').should('have.attr','placeholder','Code').type('001')
            
        cy.get('[type="submit"]').should('have.id','btn_Login').type('{enter}')
    }       
    
    clickSubmit(){
        cy.get('[type="submit"]').should('have.id','btn_Login').click()
    }

    vistiInfinity(){
        cy.visit('http://192.168.50.44:8041/')

    }

   
    
}
export default new LoginPage();
