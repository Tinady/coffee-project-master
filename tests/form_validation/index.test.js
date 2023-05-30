/**
 * @jest-environment jsdom
 */

const { coffees } = require("../data");
const { renderCoffee } = require("../../main");

// describe("__  Test", () => {
//   test("q", () => {
//     // expect(2).toBe(1);
    
//   });
// });

// describe('New coffee form', () => {
//   let form;

//   beforeEach(() => {
//     // Create a new form element before each test
//     form = document.createElement('form');
//     form.innerHTML = `
//       <label for="new-coffee-roast" class="form-label">Roast</label>
//       <select class="coffee-selectors" id="new-coffee-roast" required>
//         <option>light</option>
//         <option>medium</option>
//         <option>dark</option>
//       </select>
//       <label for="new-coffee-name" class="form-label">Coffee Name</label>
//       <input
//         class="coffee-selectors"
//         placeholder="Enter your custom coffee here"
//         type="text"
//         id="new-coffee-name"
//         required
//         min="8"
//         max="30" />
//       <input
//         id="new-coffee-button"
//         type="submit"
//         value="Create"
//         class="btn-dark btn button mb-5 coffee-selectors" />
//     `;
//   });

//   test('Form should have required fields', () => {
//     // Ensure that the form has the required fields
//     const roastSelect = form.querySelector('#new-coffee-roast');
//     const nameInput = form.querySelector('#new-coffee-name');
//     const submitButton = form.querySelector('#new-coffee-button');

//     expect(roastSelect).toBeTruthy();
//     expect(nameInput).toBeTruthy();
//     expect(submitButton).toBeTruthy();
//   });

//   test('Form should validate coffee name length', () => {
//     // Ensure that the coffee name input has the correct length validation
//     const nameInput = form.querySelector('#new-coffee-name');

//     // Test with a name that is too short
//     nameInput.value = 'short';
//     expect(nameInput.checkValidity()).toBeFalsy();

//     // Test with a name that is too long
//     nameInput.value = 'this name is way too long';
//     expect(nameInput.checkValidity()).toBeFalsy();

//     // Test with a name that is the correct length
//     nameInput.value = 'perfect name';
//     expect(nameInput.checkValidity()).toBeTruthy();
//   });

//   test('Form should submit with valid input', () => {
//     // Ensure that the form submits with valid input
//     const roastSelect = form.querySelector('#new-coffee-roast');
//     const nameInput = form.querySelector('#new-coffee-name');
//     const submitButton = form.querySelector('#new-coffee-button');

//     // Set valid input values
//     roastSelect.value = 'medium';
//     nameInput.value = 'delicious coffee';

//     // Submit the form
//     const submitEvent = new Event('submit');
//     form.dispatchEvent(submitEvent);

//     // Ensure that the form was submitted successfully
//     expect(submitButton.disabled).toBeTruthy();
//   });
// });

// describe('Coffee form inputs', () => {
//   let roastSelect;
//   let name;

//   beforeEach(() => {
//     // create a new form element before each test
//     const form = document.createElement('form');
//     form.innerHTML = `
//       <label for="new-coffee-roast" class="form-label">Roast</label>
//       <select class="coffee-selectors" id="new-coffee-roast" required>
//         <option>light</option>
//         <option>medium</option>
//         <option>dark</option>
//       </select>
//       <label for="new-coffee-name" class="form-label">Coffee Name</label>
//       <input
//         class="coffee-selectors"
//         placeholder="Enter your custom coffee here"
//         type="text"
//         id="new-coffee-name"
//         required
//         min="6"
//         max="30"
//         pattern="^[A-Z][a-zA-Z0-9]{5,29}$"
//       />
//       <div id="errors"></div>
//       <input
//         id="new-coffee-button"
//         type="submit"
//         value="Create"
//         class="btn-dark btn button mb-5 coffee-selectors"
//       />
//     `;

//     // get references to the input elements
//     roastSelect = form.querySelector('#new-coffee-roast');
//     nameInput = form.querySelector('#new-coffee-name');
//   });

//   test('roast select should have required attribute', () => {
//     expect(roastSelect).toHaveAttribute('required');
//   });

//   test('name input should have required attribute', () => {
//     expect(nameInput).toHaveAttribute('required');
//   });

//   test('name input should have min and max attributes', () => {
//     expect(nameInput).toHaveAttribute('min', '6');
//     expect(nameInput).toHaveAttribute('max', '30');
//   });

//   test('name input should have regex pattern attribute', () => {
//     expect(nameInput).toHaveAttribute('pattern', '^[A-Z][a-zA-Z0-9]{6,30}$');
//   });
// });

// describe('Coffee form inputs', () => {
//   let roastSelect;
//   let nameInput;

//   beforeEach(() => {
//     // create a new form element before each test
//     const form = document.createElement('form');
//     form.innerHTML = `
//       <label for="new-coffee-roast" class="form-label">Roast</label>
//       <select class="coffee-selectors" id="new-coffee-roast" required>
//         <option>light</option>
//         <option>medium</option>
//         <option>dark</option>
//       </select>
//       <label for="new-coffee-name" class="form-label">Coffee Name</label>
//       <input
//         class="coffee-selectors"
//         placeholder="Enter your custom coffee here"
//         type="text"
//         id="new-coffee-name"
//         required
//         minlength="6"
//         maxlength="30"
//         pattern="^[A-Z][a-zA-Z0-9]{5,29}$"
//       />
//       <div id="errors"></div>
//       <input
//         id="new-coffee-button"
//         type="submit"
//         value="Create"
//         class="btn-dark btn button mb-5 coffee-selectors"
//       />
//     `;

//     // get references to the input elements
//     roastSelect = form.querySelector('#new-coffee-roast');
//     nameInput = form.querySelector('#new-coffee-name');
//   });

//   test('roast select should have required attribute', () => {
//     expect(roastSelect).toHaveAttribute('required');
//   });

//   test('name input should have required attribute', () => {
//     expect(nameInput).toHaveAttribute('required');
//   });

//   test('name input should have minlength and maxlength attributes', () => {
//     expect(nameInput).toHaveAttribute('minlength', '6');
//     expect(nameInput).toHaveAttribute('maxlength', '30');
//   });

//   test('name input should have regex pattern attribute', () => {
//     expect(nameInput).toHaveAttribute('pattern', '^[A-Z][a-zA-Z0-9]{5,29}$');
//   });
// });

describe('Coffee form', () => {
  let form;

  beforeEach(() => {
    // create a new form element before each test
    form = document.createElement('form');
    form.innerHTML = `
      <label for="new-coffee-roast" class="form-label">Roast</label>
      <select class="coffee-selectors" id="new-coffee-roast" required>
        <option>light</option>
        <option>medium</option>
        <option>dark</option>
      </select>
      <label for="new-coffee-name" class="form-label">Coffee Name</label>
      <input
        class="coffee-selectors"
        placeholder="Enter your custom coffee here"
        type="text"
        id="new-coffee-name"
        required
        minlength="7"
        maxlength="29"
        pattern="^[A-Z][a-zA-Z0-9]{7,29}$"
      />
      <div id="errors"></div>
      <input
        id="new-coffee-button"
        type="submit"
        value="Create"
        class="btn-dark btn button mb-5 coffee-selectors"
      />
    `;
  });

  test('form should submit with valid input', () => {
    // set input values
    const roastSelect = form.querySelector('#new-coffee-roast');
    roastSelect.value = 'medium';
    const nameInput = form.querySelector('#new-coffee-name');
    nameInput.value = 'MyCoffee123';

    // submit the form
    const submitButton = form.querySelector('#new-coffee-button');
    submitButton.click();

    // assert that the form was submitted successfully
    expect(submitButton.getAttribute('type')).toBe('submit');
    // expect(nameInput.hasAttribute('patternMismatch')).toBe(false);
    expect(nameInput.validity.patternMismatch).toBe(false);
  });

  test('form should not submit with invalid input', () => {
    // set input values
    const roastSelect = form.querySelector('#new-coffee-roast');
    roastSelect.value = 'dark';
    const nameInput = form.querySelector('#new-coffee-name');
    nameInput.value = 'invalid coffee name';

    // submit the form
    const submitButton = form.querySelector('#new-coffee-button');
    submitButton.click();

    // assert that the form was not submitted
    expect(submitButton.getAttribute('type')).toBe('submit');
    // expect(nameInput.hasAttribute('patternMismatch')).toBe(true);
    expect(nameInput.validity.patternMismatch).toBe(true);
  });
});

describe('Coffee form inputs', () => {
  let roastSelect;
  let nameInput;

  beforeEach(() => {
    // create a new form element before each test
    const form = document.createElement('form');
    form.innerHTML = `
      <label for="new-coffee-roast" class="form-label">Roast</label>
      <select class="coffee-selectors" id="new-coffee-roast" required>
        <option>light</option>
        <option>medium</option>
        <option>dark</option>
      </select>
      <label for="new-coffee-name" class="form-label">Coffee Name</label>
      <input
        class="coffee-selectors"
        placeholder="Enter your custom coffee here"
        type="text"
        id="new-coffee-name"
        required
        minlength="6"
        maxlength="30"
        pattern="^[A-Z][a-zA-Z0-9]{6,30}$"
      />
      <div id="errors"></div>
      <input
        id="new-coffee-button"
        type="submit"
        value="Create"
        class="btn-dark btn button mb-5 coffee-selectors"
      />
    `;

    // get references to the input elements
    roastSelect = form.querySelector('#new-coffee-roast');
    nameInput = form.querySelector('#new-coffee-name');
  });

  test('roast select should have required attribute', () => {
    expect(roastSelect.hasAttribute('required')).toBe(true);
  });

  test('name input should have required attribute', () => {
    expect(nameInput.hasAttribute('required')).toBe(true);
  });

  test('name input should have minlength and maxlength attributes', () => {
    expect(nameInput.hasAttribute('minlength')).toBe(true);
    expect(nameInput.getAttribute('minlength')).toBe('6');
    expect(nameInput.hasAttribute('maxlength')).toBe(true);
    expect(nameInput.getAttribute('maxlength')).toBe('30');
  });

  test('name input should have regex pattern attribute', () => {
    expect(nameInput.hasAttribute('pattern')).toBe(true);
    expect(nameInput.getAttribute('pattern')).toBe('^[A-Z][a-zA-Z0-9]{6,30}$');
  });
});




