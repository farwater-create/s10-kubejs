ServerEvents.recipes((event) => {
  [
    // {
    //   result: "ae2:logic_processor_press",
    //   ingredient: "create:golden_sheet",
    //   energy: 2000,
    //   maxChargeRate: 50,
    // },
  ].forEach((recipe) => {
    event.custom({
      type: "vintageimprovements:laser_cutting",
      ingredients: [
        {
          item: recipe.ingredient,
        },
      ],
      results: [
        {
          item: recipe.result,
        },
      ],
      energy: recipe.energy,
      maxChargeRate: recipe.maxChargeRate,
    });
  });
});
