describe('Timemaster', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000');
    });

    it.only('should display user name', () => {
        cy.get('[data-test=user-name]')
            .contains('Vasiliy Pupkin');
    });

    it('should add history row', () => {
        cy.visit('/');

        startTimer();
        stopTimer();

        addDescription('test desc');

        cy.get('[data-test=history-row]')
            .contains('[data-test=description]', 'test desc')
            .should('exist');
    });

    it('it does not append new line', () => {

    });
});

function startTimer() {
    cy.get('[data-test=timer-btn]')
        .click();
}

function stopTimer() {
    cy.get('[data-test=timer-btn]')
        .click();
}

function addDescription(description) {
    cy.get('[data-test=input] input')
        .type(description)
        .blur();

    cy.get('[data-test=accept]')
        .click();
}
