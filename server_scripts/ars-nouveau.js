ServerEvents.recipes((event) => {
  event.recipes.ars_nouveau.enchanting_apparatus(
    [
      "alexsmobs:void_worm_eye",
      "minecraft:ender_pearl",
      "forbidden_arcanus:dark_matter",
      "forbidden_arcanus:dark_matter",
      "forbidden_arcanus:dark_matter",
      "forbidden_arcanus:dark_matter",
      "forbidden_arcanus:dark_matter",
      "minecraft:ender_pearl",
    ],
    "minecraft:gold_ingot",
    "createutilities:void_steel_ingot",
    10000 // may want to alter source cost
  );

  event.recipes.ars_nouveau.imbuement(
    "create:iron_sheet", // input item
    "ae2:calculation_processor_press", // output
    2000, // source cost
    [
      "ars_nouveau:conjuration_essence",
      "ars_nouveau:conjuration_essence",
      "ars_nouveau:conjuration_essence",
    ]
  );

  event.recipes.ars_nouveau.imbuement(
    "create:iron_sheet", // input item
    "ae2:engineering_processor_press", // output
    2000, // source cost
    [
      "ars_nouveau:manipulation_essence",
      "ars_nouveau:manipulation_essence",
      "ars_nouveau:manipulation_essence",
    ]
  );

  event.recipes.ars_nouveau.imbuement(
    "create:iron_sheet", // input item
    "ae2:logic_processor_press", // output
    2000, // source cost
    [
      "ars_nouveau:abjuration_essence",
      "ars_nouveau:abjuration_essence",
      "ars_nouveau:abjuration_essence",
    ]
  );

  event.recipes.ars_nouveau.imbuement(
    "create:iron_sheet", // input item
    "ae2:silicon_press", // output
    2000, // source cost
    [
      "ars_nouveau:earth_essence",
      "ars_nouveau:earth_essence",
      "ars_nouveau:earth_essence",
    ]
  );

  event.recipes.ars_nouveau.imbuement(
    "minecraft:quartz", // input item
    "create:rose_quartz", // output
    500, // source cost
    [
      "minecraft:redstone",
      "minecraft:redstone",
      "minecraft:redstone",
      "minecraft:redstone",
    ]
  );

  event.recipes.ars_nouveau.imbuement(
    "minecraft:quartz_block", // input item
    "ae2:damaged_budding_quartz", // output
    4000, // source cost
    [
      "ars_nouveau:earth_essence",
      "ars_elemental:anima_essence",
      "ars_nouveau:earth_essence",
      "ars_elemental:anima_essence",
      "minecraft:bone_meal",
      "minecraft:bone_meal",
      "ars_nouveau:manipulation_essence",
      "ars_nouveau:manipulation_essence",
    ]
  );

  event.recipes.ars_nouveau.imbuement(
    "ae2:flawed_budding_quartz", // input item
    "ae2:flawless_budding_quartz", // output
    10000, // source cost
    [
      "create:rose_quartz",
      "ae2:fluix_crystal",
      "ars_nouveau:water_essence",
      "ae2:fluix_crystal",
      "create:rose_quartz",
      "ae2:fluix_crystal",
      "ars_nouveau:water_essence",
      "ae2:fluix_crystal",
    ]
  );
});
