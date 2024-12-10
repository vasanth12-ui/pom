import LOGIN from "../../support/pageobject/login.cy";
//import LINK from "../../support/pageobject/link.cy";
//import LOGOUT from "../../support/pageobject/logout.cy";
   describe('', () => {
    const login1=new LOGIN();
    //const link=new LINK();
    //const logoutOrm=new LOGOUT();
    
    it('', () => {
         login1.EnterUrl();
         login1.loginOrm();
         //link.clickLink('Admin');
         //logoutOrm.logoutOrm();
    });
   });