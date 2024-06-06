/**
 * - Login spec
 *   - should display register page correctly
 *   - should display alert when email is empty
 *   - should display alert when password is empty
 *   - should display alert when email and password are wrong
 *   - should display homepage when email and password are correct
*/
describe('Register spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/register');
  });

  it('should display register page correctly', () => {
    // memverifikasi elemen yang harus tampak pada halaman register
    cy.get('input[placeholder="Email"]').should('be.visible');
    cy.get('input[placeholder="Name"]').should('be.visible');
    cy.get('input[placeholder="Password"]').should('be.visible');
    cy.get('button').contains(/^Register$/).should('be.visible');
  });

  it('should display alert when email is empty', () => {
    // mengisi email
    cy.get('input[placeholder="Name"]').type('testers');
    cy.get('input[placeholder="Password"]').type('testers');
    cy.get('button').contains(/^Register$/).click();
    // memverifikasi window.alert untuk menampilkan pesan dari API
    cy.on('window:alert', (str) => {
      expect(str).to.equal('"email" is not allowed to be empty');
    });
  });

  it('should display alert when password is empty', () => {
    // mengisi email
    cy.get('input[placeholder="Email"]').type('testuser@gmail.com');
    cy.get('input[placeholder="Name"]').type('testers');

    // klik tombol login tanpa mengisi password
    cy.get('button').contains(/^Register$/).click();

    // memverifikasi window.alert untuk menampilkan pesan dari API
    cy.on('window:alert', (str) => {
      expect(str).to.equal('"password" is not allowed to be empty');
    });
  });

  it('should display login page when Email and password are correct', () => {
    // mengisi name
    cy.get('input[placeholder="Name"]').type('testv2');

    // mengisi email
    cy.get('input[placeholder="Email"]').type('testv2@gmail.com');

    // mengisi password
    cy.get('input[placeholder="Password"]').type('testv2');

    // menekan tombol Register
    cy.get('button').contains(/^Register$/).click();

    // memverifikasi bahwa elemen yang berada di homepage ditampilkan
    cy.get('button').contains('Login').should('be.visible');
  });

});