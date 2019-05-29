describe('Timemaster', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000');
    });

    it('should display user name', () => {
        cy.get('[data-test=user-name]')
            .contains('Vasiliy Pupkin');
    });

    it('should add new history row', () => {
        startTimer();
        stopTimer();

        addDescription('test description');
        accept();

        cy.get('[data-test=history-row]')
            .contains('[data-test=description]', 'test description')
            .should('exist');
    });

    it(`it shouldn't add new history row`, () => {
        const initialRows = cy.get('[data-test=history-row]');

        startTimer();
        stopTimer();

        addDescription('test description');
        reject();

        cy.get('[data-test=history-row]')
            .should('to.have.eql.length', initialRows);
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
        .type(description);
}

function accept() {
    cy.get('[data-test=accept]')
        .click();
}

function reject() {
    cy.get('[data-test=reject]')
        .click();
}
