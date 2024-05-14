ServerEvents.recipes((event) => {
  [
    {
      head: "ae2:logic_processor_press",
      ingredient: "createaddition:electrum_sheet",
      result: "ae2:printed_logic_processor",
    },
    {
      head: "ae2:engineering_processor_press",
      ingredient: "minecraft:diamond",
      result: "ae2:printed_engineering_processor",
    },
    {
      head: "ae2:calculation_processor_press",
      ingredient: "ae2:certus_quartz_crystal",
      result: "ae2:printed_calculation_processor",
    },
    {
      head: "ae2:silicon_press",
      ingredient: "ae2:silicon",
      result: "ae2:printed_silicon",
    },
  ].forEach((recipe) => {
    event.custom({
      type: "vintageimprovements:curving",
      itemAsHead: recipe.head,
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
    });
  });
});
