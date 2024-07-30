ServerEvents.recipes((event) => {
  event.recipes.ars_nouveau.enchanting_apparatus(
    [
      "forbidden_arcanus:spawner_scrap",
      "forbidden_arcanus:spawner_scrap",
      "forbidden_arcanus:spawner_scrap",
      "forbidden_arcanus:spawner_scrap",
      "forbidden_arcanus:spawner_scrap",
      "forbidden_arcanus:spawner_scrap",
    ],
    "forbidden_arcanus:arcane_crystal_block", // input item
    "forbidden_arcanus:quantum_catcher", // output
    6000 // source cost
  );

  event.recipes.ars_nouveau.enchanting_apparatus(
    [
      "minecraft:redstone",
      "minecraft:amethyst_shard",
      "minecraft:redstone",
      "minecraft:amethyst_shard",
      "minecraft:redstone",
      "minecraft:amethyst_shard",
      "minecraft:redstone",
      "minecraft:amethyst_shard",
    ],
    "minecraft:quartz_block", // input item
    "ae2:damaged_budding_quartz", // output
    4000 // source cost
  );

  event.recipes.ars_nouveau.enchanting_apparatus(
    [
      "minecraft:water_bucket",
      "minecraft:diamond",
      "#minecraft:flowers",
      "#minecraft:saplings",
      "#minecraft:saplings",
      "#minecraft:flowers",
      "minecraft:diamond",
    ],
    "ars_nouveau:blank_parchment", // input item
    "farwater:twilight_scroll", // output
    4000 // source cost
  );
});
