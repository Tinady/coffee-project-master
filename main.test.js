/**
 * @jest-environment jsdom
 */
//don't remove above comment
const { renderCoffee } = require("./main");

// let coffee = { id: 1, name: "Light City", roast: "light" };
var coffees = [
  { id: 1, name: "Light City", roast: "light" },
  { id: 2, name: "Half City", roast: "light" },
  { id: 3, name: "Cinnamon", roast: "light" },
  { id: 4, name: "City", roast: "medium" },
  { id: 5, name: "American", roast: "medium" },
  { id: 6, name: "Breakfast", roast: "medium" },
  { id: 7, name: "High", roast: "dark" },
  { id: 8, name: "Continental", roast: "dark" },
  { id: 9, name: "New Orleans", roast: "dark" },
  { id: 10, name: "European", roast: "dark" },
  { id: 11, name: "Espresso", roast: "dark" },
  { id: 12, name: "Viennese", roast: "dark" },
  { id: 13, name: "Italian", roast: "dark" },
  { id: 14, name: "French", roast: "dark" },
];

describe("renderCoffee", () => {
  test("Create coffee card", () => {
    const a = renderCoffee(coffees[0]);
    console.log(a);
    //     <div class="coffee"><div class="d-none">1</div><div class="name"><p>test</p></div><p class="roast">dark</p></div>
    expect(a).toBe(
      `<div class="coffee"><div class="d-none">${coffees[0].id}</div><div class="name"><p>${coffees[0].name}</p></div><p class="roast">${coffees[0].roast}</p></div>`
    );
  });
});
