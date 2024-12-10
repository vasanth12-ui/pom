import RMLOGINAS from "cypress/support/pageobject/ormloginas.cy.js";
//cypress\support\pageobject\ormloginas.cy.js
   describe('', () => {
    const login=new RMLOGINAS();
    it('', () => {
         login.EnterUrl();
         login.loginOrm();  
    });
   });