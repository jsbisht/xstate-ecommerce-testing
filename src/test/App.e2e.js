const { Machine } = require("xstate");
const { createModel } = require("@xstate/test");

describe("feedback app", () => {
  const testMachine = Machine({
    id: "e-commerce",
    initial: "home",
    context: {},
    states: {
      home: {
        on: {
          ClICK_CATEGORY: "categories",
          CLICK_CART: "basketPreview",
        },
        meta: {
          test: async (page) => {
            await page.waitFor('[data-testid="home-page"]');
          },
        },
      },
      categories: {
        on: {
          ADD_TO_CART: "categories",
          CLICK_CART: "basketPreview",
          GO_TO_PRODUCT: "productPage",
        },
        meta: {
          test: async (page) => {
            await page.waitFor('[data-testid="category-page"]');
          },
        },
      },
      basketPreview: {
        on: {
          CHECKOUT: "checkout",
        },
        meta: {
          test: async (page) => {
            await page.waitFor('[data-testid="cart-dropdown"]');
          },
        },
      },
      productPage: {
        on: {
          ADD_TO_CART: "productPage",
          CLICK_CART: "basketPreview",
        },
        meta: {
          test: async (page) => {
            await page.waitFor('[data-testid="product-page"]');
          },
        },
      },
      checkout: {
        on: {
          CLICK_PAY_NOW: "thankyou",
          CONTINUE_SHOPPING: "home",
        },
        meta: {
          test: async (page) => {
            await page.waitFor('[data-testid="checkout-page"]');
          },
        },
      },
      thankyou: {
        type: "final",
        meta: {
          test: async (page) => {
            await page.waitFor('[data-testid="confirmation-page"]');
          },
        },
      },
    },
  });

  const testModel = createModel(testMachine, {
    events: {
      ClICK_CATEGORY: async (page) => {
        await page.click('[data-testid="menu-item-hats"]');
      },
      ADD_TO_CART: async (page) => {
        await page.click('[data-testid="item-1"]');
      },
      CLICK_CART: async (page) => {
        await page.click('[data-testid="cart-icon"]');
      },
      CHECKOUT: async (page) => {
        await page.click('[data-testid="checkout-button"]');
      },
      CLICK_PAY_NOW: async (page) => {
        await page.click('[data-testid="proceed-button"]');
      },
      CONTINUE_SHOPPING: async (page) => {
        await page.click('[data-testid="continue-shopping-button"]');
      },
      GO_TO_PRODUCT: async (page) => {
        await page.click('[data-testid="go-to-item-1"]');
      }
    },
  });

  const testPlans = testModel.getSimplePathPlans();

  testPlans.forEach((plan, i) => {
    describe(plan.description, () => {
      plan.paths.forEach((path, i) => {
        it(
          path.description,
          async () => {
            await page.setViewport({
              width: 0,
              height: 0,
            });
            await page.goto("http://localhost:3000");
            await path.test(page);
          },
          30000
        );
      });
    });
  });

  it("coverage", () => {
    testModel.testCoverage();
  });
});
