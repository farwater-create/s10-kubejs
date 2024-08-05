ServerEvents.recipes((event) => {
  [
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
