describe('App', () => {
  it('should navigate to cars page', async () => {
    cy.visit('/');

    cy.get('button').click();

    cy.url().should('include', '/cars');

    cy.request('GET', '/api/cars', {
      headers: {
        'content-type': 'application/json',
      },
    }).as('getCars');

    cy.get('main > div').should('have.text', 'loading');

    cy.get('@getCars').its('status').should('eq', 200);

    cy.get('ul > li').should('have.length.greaterThan', 3);
  });
});
