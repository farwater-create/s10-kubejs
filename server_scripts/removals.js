const recipeRemovals = [
  { output: "minecraft:ender_pearl" },
  { output: "minecraft:ender_eye", type: "minecraft:crafting_shapeless" },
  { output: "cataclysm:meat_shredder" },
  { output: "cataclysm:laser_gatling" },
  { id: "ars_nouveau:upgrade_1" },
  { output: "ars_nouveau:stable_warp_scroll" },
  { output: "ars_nouveau:warp_scroll" },
  { output: "ars_nouveau:magebloom_crop" },
  { output: "ars_nouveau:source_gem", type: "ars_nouveau:imbuement" },
  {
    output: "ars_nouveau:archmage_spell_book",
  },
  { output: "ars_nouveau:magebloom_fiber" },
  { output: "forbidden_arcanus:ender_pearl_fragment" },
  { output: "create:polished_rose_quartz", type: "create:deploying" },
  { output: "create:crafting_blueprint" },
  { output: "create:potato_cannon" },
  { type: "create:sequenced_assembly", output: "create:precision_mechanism" },
  { type: "create:pressing", output: "createutilities:void_steel_sheet" },
  { type: "create:pressing", output: "ethuim:ethium_sheet" },
  { output: "create:fluid_pipe", type: "minecraft:crafting_shaped" },
  { output: "create_sa:steam_engine" },
  { output: "minecraft:emerald", type: "vintageimprovements:curving" },
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
  { type: "createoreexcavation:drilling" },
  { type: "createoreexcavation:extracting" },
  { type: "createoreexcavation:vein" },
  {
    output: "createoreexcavation:diamond_drill",
    type: "minecraft:crafting_shaped",
  },
  { output: "createoreexcavation:drill", type: "minecraft:crafting_shaped" },
  { output: "tfmg:quad_potato_cannon" },
  { output: "tfmg:steel_mechanism", type: "create:sequenced_assembly" },
  { output: "tfmg:heavy_plate", type: "create:sequenced_assembly" },
  { output: "tfmg:steel_pipe", type: "minecraft:crafting_shaped" },
  { output: "tfmg:cast_iron_pipe", type: "minecraft:crafting_shaped" },
  { output: "tfmg:brass_pipe", type: "minecraft:crafting_shaped" },
  { output: "alexsmobs:dimensional_carver" },
  { output: "alexsmobs:shattered_dimensional_carver" },
  { output: "brewery:rope" },
];

const dyeDepotItems = ["present", "trapped_present", "candle_holder", "flag"];

const createdecoItems = ["shipping_container", "placard"];

const numismaticsItems = ["card", "id_card"];

const railwaysItems = ["conductor_cap", "incomplete_conductor_cap"];

const createItems = ["seat", "toolbox", "valve_handle"];

const reliquaryItems = ["pedestals", "passive_pedestals"];

const colors = [
  "maroon",
  "rose",
  "coral",
  "indigo",
  "navy",
  "slate",
  "olive",
  "amber",
  "beige",
  "teal",
  "mint",
  "aqua",
  "verdant",
  "forest",
  "ginger",
  "tan",
];

colors.forEach((color) => {
  dyeDepotItems.forEach((item) => {
    recipeRemovals.push({ output: `supplementaries:${item}_${color}` });
  });

  createdecoItems.forEach((item) => {
    recipeRemovals.push({ output: `createdeco:${color}_${item}` });
  });

  numismaticsItems.forEach((item) => {
    recipeRemovals.push({ output: `numismatics:${color}_${item}` });
  });

  railwaysItems.forEach((item) => {
    recipeRemovals.push({ output: `railways:${color}_${item}` });
  });

  createItems.forEach((item) => {
    recipeRemovals.push({ output: `create:${color}_${item}` });
  });

  reliquaryItems.forEach((item) => {
    recipeRemovals.push({ output: `reliquary:pedestals/${color}_pedestal` });
    recipeRemovals.push({
      output: `reliquary:pedestals/passive/${color}_passive_pedestal`,
    });
  });
});

ServerEvents.recipes((e) => {
  recipeRemovals.forEach((recipe) => e.remove(recipe));
});
