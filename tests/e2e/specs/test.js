// https://docs.cypress.io/api/introduction/api.html

describe('Header', () => {
  it('Visits the app root url', () => {
    cy.visit('/')
    cy.contains('h1', 'My ToDo list')
  })
})
describe('Func', () => {
  it('Open crete modal & add task', () => {
    cy.visit('/')
    cy.get('.create-task__btn').click()
    cy.get('.modal-mask').should('be.visible')
    cy.get('input[name=title]').clear().type('test title')
    cy.get('textarea[name=description]').clear().type('test description')
    cy.get('.add-task-btn').click()
    cy.get('.list-item').should('be.visible')
    cy.contains('.list-item__title p', 'test title')
    cy.contains('.list-item__description p', 'test description')
  })
})
