ServerEvents.recipes((event) => {
  [
    {
      ingredient: "minecraft:charcoal",
      result: "tfmg:coal_coke",
    },
  ].forEach((recipe) => {
    event.custom({
      type: "tfmg:coking",
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
