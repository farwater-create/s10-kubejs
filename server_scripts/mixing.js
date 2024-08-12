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
      [Fluid.of("farwater:magesource_mixture", 200)], // output

      [
        Fluid.of("farwater:sourceberry_juice", 100),
        Fluid.of("farwater:magebloom_juice", 100),
      ] // input
    )
    .processingTime(8 * 20); // ticks

  e.recipes.create
    .mixing(
      [Fluid.of("farwater:source_mixture", 200)], // output

      [
        Fluid.of("starbunclemania:source_fluid", 200),
        Fluid.of("farwater:magesource_mixture", 200),
      ] // input
    )
    .processingTime(8 * 20); // ticks

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

  e.recipes.create
    .mixing(
      [Item.of("tfmg:cast_iron_ingot", 1)], // output

      [Item.of("minecraft:iron_ingot", 1), Item.of("minecraft:charcoal", 1)] // input
    )
    .heated()
    .processingTime(10 * 20); // ticks

  e.recipes.create
    .mixing(
      [Fluid.of("farwater:blazing_blood", 150)], // output

      [Item.of("minecraft:blaze_powder", 1)] // input
    )
    .heated()
    .processingTime(8 * 20); // ticks

  e.recipes.create
    .mixing(
      [Fluid.of("farwater:blazing_blood", 300)], // output

      [Item.of("minecraft:blaze_rod", 1)] // input
    )
    .heated()
    .processingTime(8 * 20); // ticks
  
  e.recipes.create
    .mixing(
      [Item.of("create:crimsite"), Item.of("create:crimsite").withChance(0.2)], // output
      
      [Item.of("create:crimsite"), Item.of("minecraft:blackstone")] // input
    )
    .heated()
    .processingTime(10 * 20); // ticks

  e.recipes.create
    .mixing(
      [Item.of("create:asurine"), Item.of("create:asurine").withChance(0.2)], // output
      
      [Item.of("create:asurine"), Item.of("minecraft:cobbled_deepslate")] // input
    )
    .heated()
    .processingTime(10 * 20); // ticks

  e.recipes.create
    .mixing(
      [Item.of("create:veridium"), Item.of("create:veridium").withChance(0.2)], // output
      
      [Item.of("create:veridium"), Item.of("minecraft:mossy_cobblestone")] // input
    )
    .heated()
    .processingTime(10 * 20); // ticks

  e.recipes.create
    .mixing(
      [Item.of("create:ochrum"), Item.of("create:ochrum").withChance(0.2)], // output
      
      [Item.of("create:ochrum"), Item.of("minecraft:sandstone")] // input
    )
    .heated()
    .processingTime(10 * 20); // ticks

  e.recipes.create
    .mixing(
      [Item.of("create:limestone"), Item.of("create:limestone").withChance(0.2)], // output
      
      [Item.of("create:limestone"), Item.of("minecraft:quartz")] // input
    )
    .heated()
    .processingTime(10 * 20); // ticks
});
