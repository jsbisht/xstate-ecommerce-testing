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
        },
      },
      categories: {
        on: {
          ADD_TO_CART: "categories",
          CLICK_CART: "basketPreview",
        },
      },
      basketPreview: {
        on: {
          CHECKOUT: "checkout",
        },
      },
      checkout: {
        on: {
          CLICK_PAY_NOW: "thankyou",
          CONTINUE_SHOPPING: "home",
        },
      },
      thankyou: {
        type: "final",
      },
    },
  });

  const testModel = createModel(testMachine, {
    events: {
      ClICK_CATEGORY: async (page) => {
        await page.click('[data-testid="menu-item-hats"]');
      },
    },
  });

  const testPlans = testModel.getSimplePathPlans();

  testPlans.forEach((plan, i) => {
    describe(plan.description, () => {
      plan.paths.forEach((path, i) => {
        it(
          path.description,
          async () => {
            await page.goto("http://localhost:3000");
            await path.test(page);
          },
          10000
        );
      });
    });
  });

  it("coverage", () => {
    testModel.testCoverage();
  });
});
