/**
 * @jest-environment jsdom
 */

const { coffees } = require("../data");
const { renderCoffee } = require("../../main");

describe("Component Rendering Test", () => {
  test("renderCoffee", () => {
    const a = renderCoffee(coffees[0]);
    //     <div class="coffee"><div class="d-none">1</div><div class="name"><p>test</p></div><p class="roast">dark</p></div>
    expect(a).toBe(
      `<div class="coffee"><div class="d-none">${coffees[0].id}</div><div class="name"><p>${coffees[0].name}</p></div><p class="roast">${coffees[0].roast}</p></div>`
    );
  });
});
