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
    cy.createTask('test title', 'test description')
    cy.get('.list-item').should('be.visible')
    cy.contains('.list-item__title p', 'test title')
    cy.contains('.list-item__description p', 'test description')
  })
  it('delete task', () => {
    // cy.visit('/')
    // cy.createTask('test title', 'test description')
    cy.get('.delete').click()
  })
  it('edit task', () => {
    cy.createTask('test title', 'test description')
    cy.get('.pencil').click()
    cy.get('.modal-mask').should('be.visible')
    cy.get('input[name=title]').type(' top')
    cy.get('textarea[name=description]').type(' top')
    cy.get('.add-task-btn').click()
  })
  it('show task info', () => {
    cy.get('.list-item').dblclick()
    cy.get('.show-task-modal').should('be.visible')
  })
})
