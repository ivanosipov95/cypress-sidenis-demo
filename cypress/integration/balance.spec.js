describe('Balance', () => {

    it('should return balance data', () => {
        cy.request('/api/balance')
            .then(result => {
                expect(result.body).to.have.property('total', -1);
                expect(result.body).to.have.property('lastWeek', 12);
            })
    });

    it('should display balance component', () => {
        cy.visit('/');

        cy.get('[data-test=balance]')
            .should('exist');
    });

    it('should display balance values given by api', () => {
        cy.server();
        cy.route('/api/balance', { total: 1000, lastWeek: 2 });

        cy.visit('/');

        cy.get('[data-test=balance]')
            .should('contain', 'total: 1000')
            .and('contain', 'last week: 2');
    });

    it('should return authorized user data', () => {
        cy.setCookie('token', JSON.stringify({ name: 'Sergey Ivanov' }));

        cy.visit('/');

        cy.get('[data-test=user-name]')
            .should('contain', 'Sergey Ivanov')
    });

});