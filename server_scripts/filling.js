ServerEvents.recipes((e) => {
  e.recipes.create.filling(Item.of("ars_nouveau:sourcestone", 1), [
    Ingredient.of("forge:stone"),
    Fluid.of("starbunclemania:source_fluid", 100),
  ]);

  e.recipes.create.filling(Item.of("ars_nouveau:source_gem", 1), [
    Item.of("minecraft:emerald", 1),
    Fluid.of("farwater:magesource_mixture", 200),
  ]);

  e.recipes.create.filling(Item.of("ars_nouveau:source_gem", 1), [
    Item.of("minecraft:lapis_lazuli", 1),
    Fluid.of("farwater:magesource_mixture", 200),
  ]);
});
