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

  e.recipes.create.filling(Item.of("ars_nouveau:magebloom_crop", 1), [
    Ingredient.of("#forge:seeds", 1),
    Fluid.of("farwater:sourceberry_juice", 100),
  ]);

  e.recipes.create.filling(Item.of("create:blaze_cake", 1), [
    Item.of("create:blaze_cake_base"),
    Fluid.of("farwater:blazing_blood", 150),
  ]);

  e.recipes.create.filling(Item.of("farwater:blaze_core", 1), [
    Item.of("tfmg:steel_fluid_tank"),
    Fluid.of("farwater:blazing_blood", 1000),
  ]);

  e.recipes.create.filling(Item.of("minecraft:blaze_rod", 1), [
    Ingredient.of("#forge:rods", 2),
    Fluid.of("farwater:blazing_blood", 400),
  ]);

  e.recipes.create.filling(Item.of("minecraft:ender_eye", 1), [
    Ingredient.of("#forge:ender_pearls", 1),
    Fluid.of("farwater:blazing_blood", 200),
  ]);
});
