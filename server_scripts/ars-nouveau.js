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
    "#ae2:budding_quartz", // input item
    "ae2:flawless_budding_quartz", // output
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

  event.recipes.ars_nouveau.enchanting_apparatus(
    [
      "endermanoverhaul:summoner_pearl",
      "ars_nouveau:source_gem",
      "minecraft:lapis_lazuli",
      "ars_nouveau:source_gem",
      "minecraft:lapis_lazuli",
      "ars_nouveau:source_gem",
      "minecraft:lapis_lazuli",
      "ars_nouveau:source_gem",
    ],
    "ars_nouveau:blank_parchment", // input item
    "ars_nouveau:warp_scroll", // output
    6000 // source cost
  );

  event.recipes.ars_nouveau.enchanting_apparatus(
    [
      "endermanoverhaul:soul_pearl",
      "endermanoverhaul:bubble_pearl",
      "endermanoverhaul:icy_pearl",
      "endermanoverhaul:crimson_pearl",
      "endermanoverhaul:warped_pearl",
      "minecraft:ender_eye",
    ],
    "ars_nouveau:warp_scroll", // input item
    "ars_nouveau:stable_warp_scroll", // output
    6000 // source cost
  );

  event.recipes.ars_nouveau.enchanting_apparatus(
    [
      "createutilities:graviton_tube",
      "minecraft:popped_chorus_fruit",
      "minecraft:popped_chorus_fruit",
      "minecraft:popped_chorus_fruit",
      "minecraft:popped_chorus_fruit",
    ],
    "ars_nouveau:source_jar", // input item
    "ars_additions:ender_source_jar", // output
    6000 // source cost
  );

  event.recipes.ars_nouveau.enchanting_apparatus(
    [
      "ae2:fluix_pearl",
      "ae2:fluix_pearl",
      "create_things_and_misc:vibration_mechanism",
      "ae2:fluix_pearl",
      "ae2:flawless_budding_quartz",
      "ae2:fluix_pearl",
      "vintageimprovements:redstone_module",
      "ae2:fluix_pearl",
    ],
    "ae2:sky_stone_chest", // input item
    "ae2:mysterious_cube", // output
    10000 // source cost
  );

  event.custom({
    type: "ars_nouveau:armor_upgrade",
    pedestalItems: [
      {
        item: {
          item: "forbidden_arcanus:soul",
        },
      },
      {
        item: {
          item: "forbidden_arcanus:enchanted_soul",
        },
      },
      {
        item: {
          item: "forbidden_arcanus:corrupt_soul",
        },
      },
    ],
    sourceCost: 5000,
    tier: 1,
  });

  event.custom({
    type: "ars_nouveau:armor_upgrade",
    pedestalItems: [
      {
        item: {
          item: "alexsmobs:mimicream",
        },
      },
      {
        item: {
          item: "minecraft:chorus_fruit",
        },
      },
      {
        item: {
          item: "forbidden_arcanus:dark_matter",
        },
      },
      {
        item: {
          item: "endermanoverhaul:ancient_pearl",
        },
      },
    ],
    sourceCost: 8000,
    tier: 2,
  });
});
