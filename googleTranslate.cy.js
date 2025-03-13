describe('Translator testing', function() {

    beforeEach(() => {
        cy.visit('https://translate.google.com/');    
    })

    it('Write and delete text', function() {
        cy.get('textarea[aria-label="Source text"]').type('Hola')
        
        cy.get('.HwtZe').should('contain.text', 'Hello')

        cy.get('button[aria-label="Clear source text"]').click()

        cy.get('textarea[aria-label="Source text"]').should('contain.not.text', 'Hola')

        cy.get('div[aria-hidden="true"]').should('contain.text', 'Translation')
    })

    it('Swap language functionality', function() {
        cy.get('#i13').click()

        cy.get('textarea[aria-label="Source text"]').type('Hola')

        cy.get('.HwtZe').should('contain.text', 'Hello')

        cy.get('button[aria-label="Swap languages (Ctrl+Shift+S)"]').first().click()
        
        cy.get('div[class="D5aOJc Hapztf"]').should('contain.text','Hello')

        cy.get('.HwtZe').should('contain.text', 'Hola')
    });

    it('Select other language', function() {
        cy.get('#i13').click()

        cy.get('button[aria-label="More target languages"]').first().click()

        cy.get('.ykTHSe').should('be.visible')

        cy.get('.ykTHSe .Llmcnf').contains('German').click()

        cy.get('textarea[aria-label="Source text"]').type('Hola')

        cy.get('.HwtZe').should('contain.text', 'Hallo')
    })
})