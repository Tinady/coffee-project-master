/**
 * @jest-environment jsdom
 */

const { coffees } = require("../data");
const { renderCoffee } = require("../../main");
const { templateToHtml } = require("./../util");

describe("Component Rendering Test", () => {
  test("Render Coffee Card", () => {
    const coffeeCard = renderCoffee(coffees[0]);
    //     <div class="coffee"><div class="d-none">1</div><div class="name"><p>test</p></div><p class="roast">dark</p></div>
    expect(coffeeCard).toContain(
      `<div class="coffee"><div class="d-none">${coffees[0].id}</div><div class="name"><p>${coffees[0].name}</p></div><p class="roast">${coffees[0].roast}</p></div>`
    );
  });

  // test("Coffee card component", async () => {
  //   const coffeeCard = document.createElement("div");
  //   coffeeCard.setAttribute("class", "coffee");

  //   const coffeeID = document.createElement("div");
  //   coffeeID.setAttribute("class", "d-none");
  //   coffeeID.textContent = 1;

  //   const coffeeName = document.createElement("div");
  //   coffeeName.setAttribute("class", "name");
  //   const p = document.createElement("p");
  //   p.textContent = "Name";

  //   const roast = document.createElement("p");
  //   roast.textContent = "Name";

  //   coffeeCard.appendChild(coffeeID);
  //   coffeeCard.appendChild(coffeeName);
  //   coffeeCard.appendChild(roast);

  //   expect(element.textContent).toBe("Hello, Jest!");
  // });

  //  expect(a).toHaveProperty([])
});
