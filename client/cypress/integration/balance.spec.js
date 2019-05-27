import React from 'react';
import Balance from "../../src/components/Balance";

describe('Balance', () => {

    it('should display title', () => {
        cy.mount(<Balance/>)
            .get('[data-test=title]')
            .should('contain', 'Balance');
    });

    it('should display total hours value', () => {
        const total = 100;

        cy.mount(<Balance total={total}/>)
            .get('[data-test=total]')
            .should('contain', `total: ${total}`);
    });

    it('should display "unknown" total hours value when no total given', () => {
        cy.mount(<Balance/>)
            .get('[data-test=total]')
            .should('contain', `total: unknown`);
    });

    it('should display last week hours value', () => {
        const lastWeek = 110;

        cy.mount(<Balance lastWeek={lastWeek}/>)
            .get('[data-test=last-week]')
            .should('contain', `last week: ${lastWeek}`);
    });

});