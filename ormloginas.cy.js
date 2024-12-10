export class ORMLOGINAS{
    EnterUrl(){
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    }
    loginOrm(){
        cy.wait(3000);
        cy.get('[name="username"]').type('Admin');
        cy.get('[name="password"]').type('admin123');
        cy.get('[type="submit"]').click();
        cy.url().should('include','/dashboard');
        cy.contains('Dashboard').should('be.visible')
    }
} 
