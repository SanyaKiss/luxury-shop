describe('Auth', () => {
	it('should sign in account', () => {
		cy.visit('/')

		cy.get('.header__user').click()
		cy.contains('Log in').click()
		cy.get('.sign-dialog__tab').contains('Log In').click()

		cy.get('input[placeholder="Your email"]').should('have.value', '').type('gaga54@gmail.com')
		cy.get('input[placeholder="Password"]').should('have.value', '').type('545454')

		cy.get('button[type="submit"]').click()
	})
})
