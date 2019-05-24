describe('Date', () => {

    it('should display valid date', () => {
        cy.clock();
        cy.visit('/');

        cy.get('[data-test=date]')
            .should('contain', 'Thu Jan 01 1970');
    });

});