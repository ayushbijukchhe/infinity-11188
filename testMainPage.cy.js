import loginpage from "./loginpage"
import testingPage from "./11188"

describe('11188',()=>{
     
    beforeEach(()=>{
           Cypress.on('uncaught:exception', (err, runnable) => {
            // Return false to prevent Cypress from failing the test
            return false;
        });
        
       loginpage.loginValid()
    })

    context('User should be able to add ledger and not give permission to view certain ledger',()=>{
        it('Verify not giving permission for a branch to view a ledger',()=>{
            testingPage.clickOnNew()
            testingPage.enterBranchCode()
            testingPage.enterGLCode()
            testingPage.selectNoDropdown()
            testingPage.clickSave()
            testingPage.viewMessage()   
            testingPage.verifyApproveStatusNo()
        })

        it('Verify user cannot add GL with empty input fields',()=>{
            testingPage.clickOnNew()
            testingPage.enterBranchCode()
            testingPage.clickSave()
        })
    })

    context('User should be able to add ledger to give permission to view ledger to certain branch',()=>{
        it('Verify giving permission for a branch to view a ledger',()=>{
            testingPage.clickOnNew()
            testingPage.enterBranchCode()
            testingPage.enterGLCode()
            testingPage.selectYesDropdown()
            testingPage.clickSave()
            testingPage.viewMessage()   
            testingPage.verifyApproveStatusYes()
        })
    })

   

    context('Admin should be able to acknowledge GLs',()=>{
            
        it('Verify admin should be able to approve privilage which is added',()=>{
                testingPage.clickOnNew()
                testingPage.enterBranchCode()
                testingPage.clickApprove()

               
            })

           

            it('Verify admin should be able to delete privilage request',()=>{
            testingPage.clickOnNew()
            testingPage.enterBranchCode()
            testingPage.enterGLCode()
            testingPage.selectYesDropdown()
            testingPage.clickSave()
            testingPage.viewMessage()   
            testingPage.verifyApproveStatusYes()
            testingPage.clickDelete()
            })
    })


   
    context('User should be able to revert the accepted privilage',()=>{
        it('Verify admin can revert the request',()=>{
            
            testingPage.clickOnNew()
                testingPage.enterBranchCode()
                testingPage.revert()
        })
    })
        
    
        

    

})