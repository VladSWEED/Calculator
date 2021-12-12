describe('Calculator E2E', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should return calculator', () => {
    cy.get('div.calculator').should('exist')
    cy.get('div.display').should('exist')
    cy.get('div.display').should('have.text', '0')
    cy.get('div.operators').should('exist')
    cy.get('div.digits').should('exist')
    cy.get('button').should('have.length', 17);
    cy.get('button').each(item => cy.wrap(item).click());
    cy.get('div.display').should('have.text', '1234567890')
  })
  
  it('should display 0 after clicking on operators', () => {
    cy.contains('/').click();
    cy.contains('*').click();
    cy.contains('-').click();
    cy.contains('+').click();
    cy.get('.display').should('have.text', '0');
  });

  it('should display 23 after some operations', () => {
    cy.contains('1').click();
    cy.contains('8').click();
    cy.contains('+').click();
    cy.contains('5').click(); 
    cy.contains('=').click();
    cy.get('.display').should('have.text', '23');
  });

  it('should display 0 after operations with decimal numbers', () => {
    cy.contains('8').click();
    cy.get('#dot').invoke('width').should('be.gt', 0);
    cy.get('#dot').click();
    cy.contains('5').click();
    cy.contains('3').click().click();
    cy.contains('4').click();
    cy.contains('+').click();
    cy.contains('2').click();
    cy.contains('7').click();
    cy.get('#dot').click();
    cy.contains('9').click();
    cy.contains('=').click();
    cy.get('.display').should('have.text', '36.4334');
    cy.contains('CE').click();
    cy.get('.display').should('have.text', '0');
  });
});
