describe('Balance', () => {

    it('validate api', () => {
        cy.request('/api/balance')
            .then(res => {
                expect(res.body).to.have.property('total', -1);
                expect(res.body).to.have.property('lastWeek', 12);
            });
    });

    it.only('should display balance block on the home page', () => {
        const lastWeek = 1;
        const total = 100;
        cy.server();
        cy.route('/api/balance', { lastWeek, total }).as('balance');

        cy.visit('/');

        cy.get('[data-test=balance]')
            .should('contain', 'last week: ' + lastWeek)
            .and('contain', 'total: ' + total);
    });

});