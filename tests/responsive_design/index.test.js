/**
 * @jest-environment jsdom
 */

// const { coffees } = require("../data");
// const { renderCoffee } = require("../../main");
const { default: puppeteer } = require("puppeteer");

describe("Responsive Design", () => {
  let page;

  beforeAll(async () => {
    // Set up your testing environment to simulate the desired screen size
    // Example: Use Puppeteer to launch a headless browser with specific viewport dimensions
    const browser = await puppeteer.launch({ headless: true });
    page = await browser.newPage();
    await page.setViewport({ width: 768, height: 1024 });

    // Navigate to your application or load the relevant HTML file
    await page.goto("./../../index.html");
  });

  afterAll(async () => {
    // Close the browser or perform necessary cleanup
    await page.close();
    await browser.close();
  });

  // test("Header navigation is responsive", async () => {
  //   // Simulate a smaller screen size
  //   await page.setViewport({ width: 320, height: 480 });

  //   // Access and interact with elements on the page
  //   const header = await page.$(".header");
  //   const menuButton = await header.$(".menu-button");

  //   // Verify the expected behavior of your responsive design
  //   expect(menuButton).not.toBeNull();
  //   expect(menuButton).toHaveClass("visible-on-mobile");
  // });

  test("Content layout adapts at different breakpoints", async () => {
    // Simulate a larger screen size
    await page.setViewport({ width: 1280, height: 800 });

    // Access and interact with elements on the page
    const sidebar = await page.$(".coffee");
    // const mainContent = await page.$(".main-content");

    console.log(sidebar);

    // Verify the expected behavior of your responsive design
    // expect(sidebar).toHaveClass("visible-on-desktop");
    // expect(mainContent).toHaveClass("expanded-on-desktop");
  });

  // Add more tests for other breakpoints or responsive components
});
