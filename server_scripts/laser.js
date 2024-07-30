ServerEvents.recipes((event) => {
  [
    {
      result: "ae2:logic_processor_press",
      ingredient: "create:golden_sheet",
      energy: 2000,
      maxChargeRate: 50,
    },
    {
      result: "ae2:engineering_processor_press",
      ingredient: "minecraft:diamond",
      energy: 2000,
      maxChargeRate: 50,
    },
    {
      result: "ae2:calculation_processor_press",
      ingredient: "ae2:certus_quartz_crystal",
      energy: 2000,
      maxChargeRate: 50,
    },
    {
      result: "ae2:silicon_press",
      ingredient: "create:iron_sheet",
      energy: 2000,
      maxChargeRate: 50,
    },
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
