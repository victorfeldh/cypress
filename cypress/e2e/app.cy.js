class RegisterForm {
  elements = {
    titleInput: () => cy.get("#title"),
    titleFeedback: () => cy.get("#titleFeedback"),
    imageUrlInput: () => cy.get("#imageUrl"),
    urlFeedback: () => cy.get("#urlFeedback"),
    submitBtn: () => cy.get("btnSubmit")
  }

  typeTitle(text) {
    if (!text) return;
    registerForm.elements.titleInput().type(text)
  }

  typeUrl(text) {
    if (!text) return;
    registerForm.elements.imageUrlInput().type(text)
  }
}

const registerForm = new RegisterForm()

describe('Image registration', () => {
  describe('Submittin an image with invalid inputs', () => {
    const input = { 
      title: "",
      url: ""
    }
    it('Give I am on the image registration page', () => {
      cy.visit('/')
    })

    it(`When I enter "${input.title}" in the title field`, () => {
      registerForm.typeTitle(input.title)
    })
    it(`Then I enter "${input.url}" in the URL field`, () => {
      registerForm.typeUrl(input.url)
    })
    it(`Then I click the submit button`)
    it(`Then I should see "Please type a title for the image" message above the title field`)
    it(`And I should see "Please type a valid URL" message above the imageUrl field`)
    it(`And I should see an exclamation icon in the title and URL fields`)
  })
})