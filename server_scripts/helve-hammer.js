ServerEvents.recipes((event) => {
  [
    {
      ingredient: "createutilities:void_steel_ingot",
      result: "createutilities:void_steel_sheet",
      blows: 2,
    },
    {
      ingredient: "ethuim:ethium_ingot",
      result: "ethuim:ethium_sheet",
      blows: 5,
    },
    {
      ingredient: "tfmg:steel_ingot",
      result: "tfmg:heavy_plate",
      blows: 2,
    },
  ].forEach((recipe) => {
    event.custom({
      type: "vintageimprovements:hammering",
      hammerBlows: recipe.blows,
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
