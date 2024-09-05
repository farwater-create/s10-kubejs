ServerEvents.recipes((event) => {
  [
    {
      ingredient: "6x minecraft:charcoal",
      result: "minecraft:coal",
    },
  ].forEach((recipe) => {
    event.custom({
      type: "vintageimprovements:pressurizing",
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
