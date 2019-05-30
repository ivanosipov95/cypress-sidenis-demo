describe('Timemaster', () => {

    beforeEach(() => {
        cy.visit('/');
    });

    it('should display user name', () => {
        cy.get('[data-test=user-name]')
            .should('contain', 'Vasiliy Pupkin');
    });

    it.only('should add history row', () => {
        startTimer();
        stopTimer();

        addDescription('Test description');
        accept();

        cy.get('[data-test=history-row]')
            .contains('[data-test=description]', 'Test description')
            .should('exist');

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
    cy.get('[data-test=dialog] input')
        .type(description);
}

function accept() {
    cy.get('[data-test=accept]')
        .click()
}
