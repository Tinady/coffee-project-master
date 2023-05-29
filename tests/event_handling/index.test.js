/**
 * @jest-environment jsdom
 */

const { coffees } = require("../data");
const { createCoffee } = require("../../main");

describe("Event Handling Test", () => {
  // test the coffee search bar
  test("Coffee Searching", () => {
    coffees.forEach(element => {
      expect(element.name.includes(coffeeSearch.value)).toBe(true)
    });
  });
});
