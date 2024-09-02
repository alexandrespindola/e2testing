describe('Login Test Feature', () => {
  it('user cannot access to protected page without login', () => {
    cy.visit('/');
    cy.url().should('eq', 'http://localhost:8080/login');
  });

  it('user cannot login with invalid credentials', () => {
    cy.login('info@admin.com', '654321');
    cy.get('p').should('have.text', 'Wrong email or password');
    cy.visit('/');
    cy.url().should('eq', 'http://localhost:8080/login');
  });

  it('user can successfully login with valid credentials', () => {
    cy.login('admin@admin.com', '123456');
    cy.url().should('eq', 'http://localhost:8080/');
  });
});