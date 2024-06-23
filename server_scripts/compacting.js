// priority: 1

ServerEvents.recipes((e) => {
  e.recipes.create.compacting(
    [Fluid.of("farwater:sourceberry_juice", 50)],
    [Item.of("ars_nouveau:sourceberry_bush", 1)]
  );

  e.recipes.create.compacting(
    [Fluid.of("farwater:magebloom_juice", 50)],
    [Item.of("ars_nouveau:magebloom", 1)]
  );

  e.recipes.create.compacting(
    [Item.of("farwater:rubber", 1)],
    [Fluid.of("minecraft:water", 125), Ingredient.of("#minecraft:flowers", 4)]
  );

  e.recipes.create.compacting(
    [Item.of("farwater:rubber", 1)],
    [Fluid.of("minecraft:water", 125), Item.of("minecraft:vine", 4)]
  );

  e.recipes.create.compacting(
    [Item.of("farwater:rubber", 1)],
    [Fluid.of("minecraft:water", 125), Item.of("minecraft:kelp", 2)]
  );
});
