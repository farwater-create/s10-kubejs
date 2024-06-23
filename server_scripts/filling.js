ServerEvents.recipes((e) => {
  e.recipes.create.filling(Item.of("ars_nouveau:sourcestone", 1), [
    Ingredient.of("forge:stone"),
    Fluid.of("starbunclemania:source_fluid", 100),
  ]);

  e.recipes.create.filling(Item.of("ars_nouveau:source_gem", 1), [
    Ingredient.of("#ars_nouveau:valid_gems", 1),
    Fluid.of("farwater:magesource_mixture", 200),
  ]);

  e.recipes.create.filling(Item.of("ars_nouveau:source_gem", 1), [
    Ingredient.of("#ars_nouveau:valid_gems", 1),
    Fluid.of("starbunclemania:source_fluid", 100),
  ]);
});
