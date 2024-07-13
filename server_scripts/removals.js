const recipeRemovals = [
  // Vanilla
  { output: "minecraft:ender_pearl" },
  { output: "minecraft:ender_eye", type: "minecraft:crafting_shapeless" },

  // Cataclysm
  // { output: "cataclysm:the_incinerator" },
  // { output: "cataclysm:bulwark_of_the_flame" },
  // { output: "cataclysm:ignitium_helmet" },
  // { output: "cataclysm:ignitium_chestplate" },
  // { output: "cataclysm:ignitium_elytra_chestplate" },
  // { output: "cataclysm:ignitium_leggings" },
  // { output: "cataclysm:ignitium_boots" },
  { output: "cataclysm:meat_shredder" },
  { output: "cataclysm:laser_gatling" },

  // Ars Nouveau
  { id: "ars_nouveau:upgrade_1" },
  { output: "ars_nouveau:stable_warp_scroll" },
  { output: "ars_nouveau:warp_scroll" },
  { output: "ars_nouveau:magebloom_crop" },
  { output: "ars_nouveau:source_gem", type: "ars_nouveau:imbuement" },
  {
    output: "ars_nouveau:novice_spell_book",
    type: "minecraft:crafting_shapeless",
  },
  {
    output: "ars_nouveau:apprentice_spell_book",
    type: "minecraft:crafting_shapeless",
  },
  {
    output: "ars_nouveau:archmage_spell_book",
    type: "minecraft:crafting_shapeless",
  },
  { output: "ars_nouveau:magebloom_fiber" },

  // Forbidden Arcanus
  { output: "forbidden_arcanus:ender_pearl_fragment" },

  // Create
  { output: "create:polished_rose_quartz", type: "create:deploying" },
  { output: "create:crafting_blueprint" },
  { output: "create:potato_cannon" },
  { type: "create:sequenced_assembly", output: "create:precision_mechanism" },
  { type: "create:pressing", output: "createutilities:void_steel_sheet" },
  { type: "create:pressing", output: "ethuim:ethium_sheet" },
  {
    output: "create:fluid_pipe",
    type: "minecraft:crafting_shaped",
  },

  // Create SA
  { output: "create_sa:steam_engine" },

  // Create Utilities
  { output: "createutilities:void_steel_ingot" },

  // Vintage Improvements
  { output: "minecraft:emerald", type: "vintageimprovements:curving" },

  // AE2
  { output: "ae2:printed_logic_processor" },
  { output: "ae2:printed_engineering_processor" },
  { output: "ae2:printed_calculation_processor" },
  { output: "ae2:printed_silicon" },
  { output: "ae2:logic_processor" },
  { output: "ae2:calculation_processor" },
  { output: "ae2:logic_processor_press" },
  { output: "ae2:calculation_processor_press" },
  { output: "ae2:engineering_processor_press" },
  { output: "ae2:silicon_press" },
  { output: "ae2:inscriber" },
  { output: "ae2:engineering_processor" },

  // Ore Excavation
  { type: "createoreexcavation:drilling" },
  { type: "createoreexcavation:extracting" },
  { type: "createoreexcavation:vein" },
  {
    output: "createoreexcavation:diamond_drill",
    type: "minecraft:crafting_shaped",
  },
  { output: "createoreexcavation:drill", type: "minecraft:crafting_shaped" },

  // TFMG
  { output: "tfmg:quad_potato_cannon" },
  { output: "tfmg:steel_mechanism", type: "create:sequenced_assembly" },
  { output: "tfmg:heavy_plate", type: "create:sequenced_assembly" },
  { output: "tfmg:steel_pipe", type: "minecraft:crafting_shaped" },
  { output: "tfmg:cast_iron_pipe", type: "minecraft:crafting_shaped" },
  { output: "tfmg:brass_pipe", type: "minecraft:crafting_shaped" },

  // Alex Mobs
  { output: "alexsmobs:dimensional_carver" },
  { output: "alexsmobs:shattered_dimensional_carver" },
];

ServerEvents.recipes((e) => {
  recipeRemovals.forEach((recipe) => {
    e.remove(recipe);
  });
});
