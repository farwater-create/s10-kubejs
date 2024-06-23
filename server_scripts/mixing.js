// priority: 1

function addMixingRecipe(
  e,
  ingredients,
  results,
  heatRequirement,
  processingTime
) {
  return e.recipes.create.mixing({
    ingredients: ingredients.map((o) => o.toJson()),
    results: results.map((o) => o.toJson()),
    heatRequirement: heatRequirement,
    processingTime: processingTime,
  });
}

ServerEvents.recipes((e) => {
  e.recipes.create
    .mixing(
      [Fluid.of("farwater:source_mixture", 200)], // output

      [
        Fluid.of("farwater:sourceberry_juice", 200),
        Fluid.of("starbunclemania:source_fluid", 200),
      ] // input
    )
    .processingTime(10 * 20); // ticks

  e.recipes.create
    .mixing(
      [Fluid.of("farwater:source_mixture", 200)], // output

      [
        Fluid.of("farwater:magebloom_juice", 200),
        Fluid.of("starbunclemania:source_fluid", 200),
      ] // input
    )
    .processingTime(10 * 20); // ticks

  e.recipes.create
    .mixing(
      [Fluid.of("farwater:liquid_rubber", 100)], // output

      [Item.of("farwater:rubber", 1)] // input
    )
    .heated()
    .processingTime(5 * 20); // ticks

  e.recipes.create
    .mixing(
      [Fluid.of("farwater:liquid_rubber", 100)], // output

      [Item.of("farwater:cured_rubber", 1)] // input
    )
    .heated()
    .processingTime(5 * 20); // ticks

  e.recipes.create
    .mixing(
      [Fluid.of("farwater:liquid_rubber", 100)], // output

      [Ingredient.of("#minecraft:flowers", 4), Fluid.of("minecraft:water", 125)] // input
    )
    .heated()
    .processingTime(10 * 20); // ticks

  e.recipes.create
    .mixing(
      [Fluid.of("farwater:liquid_rubber", 100)], // output

      [Item.of("minecraft:kelp", 2), Fluid.of("minecraft:water", 125)] // input
    )
    .heated()
    .processingTime(10 * 20); // ticks

  e.recipes.create
    .mixing(
      [Fluid.of("farwater:liquid_rubber", 100)], // output

      [Item.of("minecraft:vine", 4), Fluid.of("minecraft:water", 125)] // input
    )
    .heated()
    .processingTime(10 * 20); // ticks
});
