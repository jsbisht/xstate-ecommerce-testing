export default shoppingMachine = Machine({
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
