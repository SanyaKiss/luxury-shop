describe('Product', () => {
	it('should have a search input', () => {
		cy.visit('/products')

		cy.get('.search-input').should('have.value', '')
	})

	it('should find a product by name and open product page', () => {
		cy.visit('/products')

		cy.get('.search-input').type('vogshen')
		cy.get('.product h4').should('have.text', 'Vogshen')
		cy.get('.product img').click()

		cy.get('.product-block__title').should('have.text', 'Vogshen')
	})

	it('should inc and dec', () => {
		cy.visit('/product/1')

		cy.get('.counter__input').should('have.value', '1')

		cy.get('[data-testid="inc-btn"]').click()
		cy.get('.counter__input').should('have.value', '2')
		cy.get('[data-testid="dec-btn"]').click()

		cy.get('.counter__input').should('have.value', '1')
	})

	it('should add 3 products to cart', () => {
		cy.visit('/product/1')

		cy.get('.counter__input').should('have.value', '1')

		cy.get('[data-testid="inc-btn"]').click().click()
		cy.get('.counter__input').should('have.value', '3')
		cy.contains('Add to cart').click()

		cy.get('.counter__input').should('have.value', '1')
	})
})
