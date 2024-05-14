ServerEvents.recipes((e) => {
  e.recipes.create.filling(Item.of("ars_nouveau:sourcestone", 1), [
    Ingredient.of("forge:stone"),
    Fluid.of("starbunclemania:source_fluid", 100),
  ]);
});
