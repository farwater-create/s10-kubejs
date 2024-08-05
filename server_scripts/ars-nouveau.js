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

  let tier2Upgrade = (item) => {
    event.recipes.create
      .mixing(
        [Item.of(item, '{Damage:0,an_stack_perks:{color:"",perks:[],tier:1}}')], // output

        [Item.of(item, 1), Fluid.of("farwater:source_mixture", 1000)] // input
      )
      .processingTime(10 * 20); // ticks

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
      Item.of(item, '{Damage:0,an_stack_perks:{color:"",perks:[],tier:1}}'), // output
      6000 // source cost
    );
  };

  tier2Upgrade("ars_nouveau:sorcerer_hood");
  tier2Upgrade("ars_nouveau:sorcerer_robes");
  tier2Upgrade("ars_nouveau:sorcerer_leggings");
  tier2Upgrade("ars_nouveau:sorcerer_boots");
  tier2Upgrade("ars_nouveau:arcanist_hood");
  tier2Upgrade("ars_nouveau:arcanist_robes");
  tier2Upgrade("ars_nouveau:arcanist_leggings");
  tier2Upgrade("ars_nouveau:arcanist_boots");
  tier2Upgrade("ars_nouveau:battlemage_hood");
  tier2Upgrade("ars_nouveau:battlemage_robes");
  tier2Upgrade("ars_nouveau:battlemage_leggings");
  tier2Upgrade("ars_nouveau:battlemage_boots");
});
