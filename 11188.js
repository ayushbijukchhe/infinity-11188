

class testingPage{

    clickOnNew(){
        cy.get('.iconPanel').within(()=>{
            cy.get('.New_Icon').eq(0).click()
        })

    }

    enterBranchCode(){
        cy.get('#txtBranchCode').type('002')
        cy.get('#txtBranchCode').type('{enter}')
       }

    enterGLCode(){
        cy.get('#txtAcCode').clear().type('L6')
        cy.get('.footer').click()
    }

    clickSave(){
        cy.get('#ContentPlaceHolder1_btnAdd').should('have.class','save_btn').click()
    }

    viewMessage(){
        cy.get('#message').should('be.visible')
        cy.get('.ui-dialog-buttonset').eq(2).within(()=>{
            cy.get('[type="button"]').click()
        })
        // cy.get('[aria-describedby="message"] > .ui-dialog-buttonpane > .ui-dialog-buttonset > .ui-button').click()
    }

    selectNoDropdown(){
        cy.get('#ContentPlaceHolder1_ddlExcl').select('NO')
    }

    selectYesDropdown(){
        cy.get('#ContentPlaceHolder1_ddlExcl').select('YES')
    }

    verifyApproveStatusYes(){
        cy.get('#ContentPlaceHolder1_panelBankAcGroupMaintenance > div').last().should('contain','YES')
    }

    verifyApproveStatusNo(){
        cy.get('#ContentPlaceHolder1_gridviewBankAcGroup').last().should('contain','NO')
    }

    clickApprove() {
        cy.get('#ContentPlaceHolder1_gridviewBankAcGroup')
          .find('tbody > tr')
          .eq(-2) 
          .should('exist') 
          .then(($el) => {
              // alternate class name hune case
              const hasRowStyle = $el.hasClass('RowStyle');
              const hasAlternatingRowStyle = $el.hasClass('AlternatingRowStyle');
    
              // duita maddhe euta class name huna parne
              expect(hasRowStyle || hasAlternatingRowStyle).to.be.true;
    
              // Proceed with actions
              cy.wrap($el).within(() => {
                  cy.get('[type="submit"][value="Approve"]').should('have.attr', 'value', 'Approve').click();
              });
          });
          cy.get('[aria-describedby="message"] > .ui-dialog-buttonpane > .ui-dialog-buttonset > .ui-button').click()

    }

    clickDelete() {
        cy.get('#ContentPlaceHolder1_gridviewBankAcGroup')
          .find('tbody > tr')
          .eq(-2) 
          .should('exist') 
          .then(($el) => {
              // Check if the element has either class
              const hasRowStyle = $el.hasClass('RowStyle');
              const hasAlternatingRowStyle = $el.hasClass('AlternatingRowStyle');
    
              // Assert that one of the classes is present
              expect(hasRowStyle || hasAlternatingRowStyle).to.be.true;
    
              // Proceed with actions
              cy.wrap($el).within(() => {
                  cy.get('[type="submit"][value="Delete"]').should('have.attr', 'value', 'Delete').click();
              });
          });
          cy.get('[aria-describedby="message"] > .ui-dialog-buttonpane > .ui-dialog-buttonset > .ui-button').click()

    }

    revert() {
        cy.get('#ContentPlaceHolder1_gridviewBankAcGroup')
          .find('tbody > tr')
          .eq(-2) // Get the second-to-last row
          .should('exist') // Ensure the row exists
          .then(($el) => {
              // Check if the element has either class
              const hasRowStyle = $el.hasClass('RowStyle');
              const hasAlternatingRowStyle = $el.hasClass('AlternatingRowStyle');
    
              // Assert that one of the classes is present
              expect(hasRowStyle || hasAlternatingRowStyle).to.be.true;
    
              // Proceed with actions
              cy.wrap($el).within(() => {
                  cy.get('[type="submit"][value="Revert"]').should('have.attr', 'value', 'Revert').click();
              });
          });
          cy.get('[aria-describedby="message"] > .ui-dialog-buttonpane > .ui-dialog-buttonset > .ui-button').click()

    }

    // addNewLedger(){
    //     testingPage.clickOnNew()
    //     testingPage.enterBranchCode()
    //     testingPage.enterGLCode()
    //     testingPage.selectNoDropdown()
    //     testingPage.clickSave()
    //     testingPage.viewMessage()   
    //     testingPage.verifyApproveStatusNo()
    // }

    
    

   
}

export default new testingPage();