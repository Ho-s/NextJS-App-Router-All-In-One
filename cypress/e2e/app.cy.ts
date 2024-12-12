describe('App', () => {
  it('should navigate to cars page', async () => {
    cy.visit('/');

    cy.get('button').click();

    cy.url().should('include', '/cars');
  });
});
