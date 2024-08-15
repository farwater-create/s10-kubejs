let turningRecipes = [
  {
    ingredients: [{ tag: "forge:storage_blocks/iron" }],
    results: [{ item: "createoreexcavation:drill" }],
  },
  {
    ingredients: [{ tag: "forge:storage_blocks/diamond" }],
    results: [{ item: "createoreexcavation:diamond_drill" }],
  },
  {
    ingredients: [{ tag: "forge:ingots/copper" }],
    results: [{ item: "create:fluid_pipe", count: 4 }],
  },
  {
    ingredients: [{ tag: "forge:ingots/cast_iron" }],
    results: [{ item: "tfmg:cast_iron_pipe", count: 4 }],
  },
  {
    ingredients: [{ tag: "forge:ingots/brass" }],
    results: [{ item: "tfmg:brass_pipe", count: 4 }],
  },
  {
    ingredients: [{ tag: "forge:ingots/steel" }],
    results: [{ item: "tfmg:steel_pipe", count: 4 }],
  },
];

ServerEvents.recipes((e) => {
  turningRecipes.forEach((recipe) => {
    e.custom({
      type: "vintageimprovements:turning",
      ingredients: recipe.ingredients,
      results: recipe.results,
    }).id(`vintageimprovements:turning/${recipe.results[0].item}`);
  });
});
