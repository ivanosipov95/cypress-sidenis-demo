describe('Timemaster cookie example', () => {

    it('should return authorized user data', () => {
        cy.setCookie('token', JSON.stringify({ name: 'Osipov Ivan' }));

        cy.visit('/');

        cy.get('[data-test=user-name]')
            .should('contain', 'Osipov Ivan')
    });

});
