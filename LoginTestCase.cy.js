import LoginPage from "./loginpage"

describe('Login test cases',()=>{
     
    beforeEach(()=>{
        LoginPage.vistiInfinity();
    })

    context('Login with invalid credentials',()=>{
        it('Verify login with valid username and invalid passwrord',()=>{
            // LoginPage.vistiInfinity();
            LoginPage.typeValidUsername();
            LoginPage.typeInvalidPassword();
            LoginPage.enterBranchCode();
            cy.get('#message')
            .should('be.visible')
           // LoginPage.clickSubmit()
        })

        it('Verify login with invalid username and invalid password',()=>{
            LoginPage.typeInvalidUsername();
            LoginPage.typeInvalidPassword();
            LoginPage.enterBranchCode();
            cy.get('#message')
            .should('be.visible')

        })

    })

    context('Login with valid credentials',()=>{
        it('Verify login with valid username and valid password',()=>{
            LoginPage.loginValid(); 
         })
    })
       

    
         

         
})